import {Dispatch} from "redux";
import {ShowActions, ShowsActionTypes} from "../../types/shows";
import axios from "axios";

export const fetchShows = (page: number) => {
    return async (dispatch: Dispatch<ShowActions>) => {
        try {
            dispatch({type: ShowsActionTypes.FETCH_SHOWS})
            const response = await axios.get(`https://api.tvmaze.com/shows?page=${page}`)
            console.log(response.data)
            dispatch({type: ShowsActionTypes.FETCH_SHOWS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: ShowsActionTypes.FETCH_SHOWS_ERROR, payload: 'Ошибка загрузки!'})
        }
    }
}
