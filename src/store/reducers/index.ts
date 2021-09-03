import {combineReducers} from "redux";
import {showsReducer} from "./showsReducer";

export const rootReducer = combineReducers({
    shows: showsReducer
})

export type RootState = ReturnType<typeof rootReducer>
