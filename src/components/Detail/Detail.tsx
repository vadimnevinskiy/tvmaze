import React, {useEffect} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {fetchDetail} from "../../store/action-creators/detail";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import classes from "./Detail.module.css"

const Detail = () => {
    const history = useHistory()
    const showId = history.location.pathname.split('/')[2];
    const {detail, loading, error} = useTypedSelector(state => state.detail)
    const {fetchDetail} = useActions()

    useEffect(() => {
        fetchDetail(Number(showId))
    }, [showId])


    if(loading) return <div><h1>Загрузка...</h1></div>
    if(error) return <div><h1>{error}</h1></div>

    console.log(detail)

    return (
        <div>
            {
                detail &&
                <div className="row">
                    <div className="col s3">
                        <img src={detail.image.medium} alt="" />
                    </div>
                    <div className="col s9">
                        <h1>{detail.name}</h1>
                        <h3>{detail.premiered}</h3>
                        <div className={classes.genres} >
                            {
                                detail.genres.map(genre => {
                                    return (
                                        <div key={genre} className="chip white-text blue darken-1">
                                                {genre}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <div dangerouslySetInnerHTML={{__html: detail.summary}}></div>
                        </div>
                    </div>
                </div>
            }
            <NavLink to={"/"} className="fixed-action-btn btn-floating btn-large  blue darken-4">
                <i className="large material-icons">arrow_back</i>
            </NavLink>
        </div>
    );
};

export default Detail;
