import {ShowActions, ShowsActionTypes, ShowsState} from "../../types/shows";

const initialState: ShowsState = {
    shows: [],
    loading: false,
    error: null,
    pageNumber: 1,
    localPageNumber: 1
}

export const showsReducer = (state: ShowsState = initialState, action: ShowActions): ShowsState => {
    switch (action.type) {
        case ShowsActionTypes.FETCH_SHOWS:
            return {
                ...state,
                loading: true
            }
        case ShowsActionTypes.FETCH_SHOWS_SUCCESS:
            return {
                ...state,
                loading: false,
                shows: action.payload
            }
        case ShowsActionTypes.FETCH_SHOWS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ShowsActionTypes.SET_PAGE_NUMBER:
            return {
                ...state,
                loading: false,
                pageNumber: action.payload
            }
        case ShowsActionTypes.SET_LOCAL_PAGE_NUMBER:
            return {
                ...state,
                loading: false,
                localPageNumber: action.payload
            }
        default:
            return state
    }
}
