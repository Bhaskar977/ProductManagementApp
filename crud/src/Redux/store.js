import thunk from "redux-thunk";
import { reducer as productReducer } from "./Products/reducer";
import {legacy_createStore,applyMiddleware, combineReducers} from "redux";
import {reducer as authReducer} from "./Authentication/reducer"

let rootReducer = combineReducers({productReducer,authReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

// const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`