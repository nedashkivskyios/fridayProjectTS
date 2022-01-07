import {applyMiddleware, combineReducers, createStore} from "redux";
import {mainReducer} from "./reducers/mainReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  main: mainReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>