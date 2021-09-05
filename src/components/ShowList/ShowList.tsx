import React, {useEffect} from 'react';
import classes from "./ShowList.module.css";
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const ShowList = () => {
    const {shows, loading, error, pageNumber, localPageNumber} = useTypedSelector(state => state.shows)
    const {fetchShows} = useActions()

    useEffect(() => {
        fetchShows(pageNumber)
    }, [])

    if (loading) return <div><h1>Загрузка...</h1></div>
    if (error) return <div><h1>{error}</h1></div>


    return (
        <div className="row">
            <h1 className="pageTitle">TvMaze</h1>
            {
                shows.map(show => {
                    return (
                        <div className="col s6 m4 l3 xl2" key={show.id}>
                            <div className="card">
                                <div className="card-image">
                                    <img src={show.image?.medium}/>
                                    <span className="card-title">{show.name}</span>
                                </div>
                                <div className="card-content">
                                    <div dangerouslySetInnerHTML={{__html: show.summary.substr(0, 70) + '...'}}></div>
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
    );
};

export default ShowList;
