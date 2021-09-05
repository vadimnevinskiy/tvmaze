import {combineReducers} from "redux";
import {showsReducer} from "./showsReducer";
import {detailReducer} from "./detailReducer";

export const rootReducer = combineReducers({
    shows: showsReducer,
    detail: detailReducer
})

export type RootState = ReturnType<typeof rootReducer>
