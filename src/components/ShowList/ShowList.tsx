import React, {useEffect, useState} from 'react';
import classes from "./ShowList.module.css";
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {Show} from "../../types/shows";

const ShowList = () => {
    const {shows, loading, error, pageNumber, localPageNumber} = useTypedSelector(state => state.shows)
    const {fetchShows, setLocalPageNumber} = useActions()
    const pageItemsCount = 10
    const [pages, setPages] = useState([0])

    const [portionEnd, setPortionEnd] = useState(pageItemsCount)
    const [portionShows, setPortionShows] = useState<Show[]>([])

    //Get all shows
    useEffect(() => {
        fetchShows(pageNumber)
    }, [])


    useEffect(() => {
        let pageTemp = []
        for (let i = 1; i < shows.length / pageItemsCount; i++) {
            pageTemp.push(i)
        }
        setPages(pageTemp)
        // alert('shows ' + localPageNumber)
        slicePortion()
    }, [shows])



    useEffect(() => {
        const end = portionEnd * localPageNumber
        const start = end - pageItemsCount

        // alert('localPageNumber ' + localPageNumber)
        slicePortion(start, end)
    }, [localPageNumber])

    const slicePortion = (start: number = 0, end: number = 10) => {
        // alert('slicePortion ' + localPageNumber)
        const portion = shows.slice(start, end)
        setPortionShows(portion)
    }




    if (loading) return <div><h1>Загрузка...</h1></div>
    if (error) return <div><h1>{error}</h1></div>


    return (
        <>

            <div className="row">
                <h1 className="pageTitle">TvMaze</h1>
                <ul className="pagination">
                    <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                    {
                        pages.map(page => {
                            return (
                                <li
                                    key={page}
                                    className={localPageNumber === page ? "active" : 'inactive'}
                                    onClick={() => setLocalPageNumber(page)}
                                ><a href="#!">{page}</a></li>
                            )
                        })
                    }
                    <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                </ul>

                {
                    portionShows.map((show: Show, index: number) => {
                        return (
                            <div className="col s6 m4 l3 xl2" key={show.id}>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={show.image?.medium}/>
                                        <span className="card-title">{index}-{show.id}-{show.name}</span>
                                    </div>
                                    <div className={classes.cardContent + " card-content"}>
                                        <div>
                                            {show.premiered}
                                        </div>
                                        <div className={classes.genres} >
                                            {
                                                show.genres.map(genre => {
                                                    return (
                                                        <div key={genre} className="chip white-text blue darken-1">
                                                            {genre}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        {/*<div*/}
                                        {/*    dangerouslySetInnerHTML={{__html: show.summary.substr(0, 50) + '...'}}></div>*/}
                                    </div>
                                    <div className="card-action">
                                        <NavLink to={`/detail/${show.id}`}>Detail</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ShowList;
