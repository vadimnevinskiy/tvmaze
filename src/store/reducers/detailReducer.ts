import {DetailActions, DetailActionTypes, DetailState} from "../../types/detail";

const initialState: DetailState = {
    detail: null,
    loading: false,
    error: null
}

export const detailReducer = (state: DetailState = initialState, action: DetailActions): DetailState => {
    switch (action.type) {
        case DetailActionTypes.FETCH_DETAIL:
            return {
                detail: null,
                loading: true,
                error: null
            }
        case DetailActionTypes.FETCH_DETAIL_SUCCESS:
            return {
                detail: action.payload,
                loading: false,
                error: null
            }
        case DetailActionTypes.FETCH_DETAIL_ERROR:
            return {
                detail: null,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
