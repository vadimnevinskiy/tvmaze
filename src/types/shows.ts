
interface Rating {
    average: string
}
interface Image {
    medium: string
    original: string
}
interface Show {
    id: number
    url: string
    name: string
    type: string
    language: string
    genres: string[]
    runtime: number
    averageRuntime: number
    premiered: string
    rating: Rating
    image: Image
    summary: string
}
export interface ShowsState {
    shows: Show[]
    loading: boolean
    error: string | null
    pageNumber: number
    localPageNumber: number
}

export enum ShowsActionTypes {
    FETCH_SHOWS = 'FETCH_SHOWS',
    FETCH_SHOWS_SUCCESS = 'FETCH_SHOWS_SUCCESS',
    FETCH_SHOWS_ERROR = 'FETCH_SHOWS_ERROR',
    SET_PAGE_NUMBER = 'SET_PAGE_NUMBER',
    SET_LOCAL_PAGE_NUMBER = 'SET_LOCAL_PAGE_NUMBER'
}
interface FetchShows {
    type: ShowsActionTypes.FETCH_SHOWS
}
interface FetchShowsSuccess {
    type: ShowsActionTypes.FETCH_SHOWS_SUCCESS
    payload: Show[]
}
interface FetchShowsError {
    type: ShowsActionTypes.FETCH_SHOWS_ERROR
    payload: string
}
interface SetPageNumber {
    type: ShowsActionTypes.SET_PAGE_NUMBER
    payload: number
}
interface SetLocalPageNumber {
    type: ShowsActionTypes.SET_LOCAL_PAGE_NUMBER
    payload: number
}
export type ShowActions = FetchShows | FetchShowsSuccess | FetchShowsError | SetPageNumber | SetLocalPageNumber
