import {Dispatch} from "redux";
import {DetailActions, DetailActionTypes} from "../../types/detail";
import axios from "axios";

export const fetchDetail = (showId: number) => {
    return async (dispatch: Dispatch<DetailActions>) => {
        try {
            dispatch({type: DetailActionTypes.FETCH_DETAIL})
            const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`)
            dispatch({type: DetailActionTypes.FETCH_DETAIL_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: DetailActionTypes.FETCH_DETAIL_ERROR, payload: 'Ошибка загрузки!'})
        }
    }
}
