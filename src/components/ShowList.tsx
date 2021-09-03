import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const ShowList = () => {
    const {shows, loading, error, pageNumber, localPageNumber} = useTypedSelector(state => state.shows)
    const {fetchShows} = useActions()

    useEffect(() => {
        fetchShows(pageNumber)
    }, [])

    if(loading) return <div><h1>Загрузка...</h1></div>
    if(error) return <div><h1>{error}</h1></div>


    return (
        <div>
            {
                shows.map(show => {
                    return (
                        <div key={show.id}>{show.name}</div>
                    )
                })
            }
        </div>
    );
};

export default ShowList;
