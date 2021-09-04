import {ShowsActionTypes} from "./shows";

export enum DetailActionTypes {
    FETCH_DETAIL = 'FETCH_DETAIL',
    FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCCESS',
    FETCH_DETAIL_ERROR = 'FETCH_DETAIL_ERROR'
}
interface Schedule {
    time: string,
    days: string[]
}
interface Rating {
    average: number
}
interface Country {
    name: string
    code: string
    timezone: string
}
interface Network {
    id: number
    name: string
    country: Country
}
interface Externals {
    tvrage: number
    thetvdb: number
    imdb: string
}
interface Image {
    medium: string
    original: string
}
interface Links {
    self: { "href": string }
    previousepisode: { "href": string }
}
export interface Detail {
    id: number
    url: string
    name: string
    type: string
    language: string
    genres: string[]
    status: string
    runtime: number
    averageRuntime: number
    premiered: string
    officialSite: string
    schedule: Schedule
    rating: Rating
    weight: number
    network: Network
    webChannel: string | null
    dvdCountry: string | null
    externals: Externals
    image: Image
    summary: string
    updated: number
    _links: Links
}

export interface DetailState {
    detail: Detail | null
    loading: boolean
    error: string | null
}

interface FetchDetail {
    type: DetailActionTypes.FETCH_DETAIL
}
interface FetchDetailSuccess {
    type: DetailActionTypes.FETCH_DETAIL_SUCCESS
    payload: Detail
}
interface FetchDetailError {
    type: DetailActionTypes.FETCH_DETAIL_ERROR
    payload: string
}


export type DetailActions = FetchDetail | FetchDetailSuccess | FetchDetailError
