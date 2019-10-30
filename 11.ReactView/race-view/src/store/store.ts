import { combineReducers, createStore, applyMiddleware } from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from "./users/reducer";

const initialState ={}

const reducer = combineReducers<any>({
    userReducer: userReducer
});

const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(thunk)))
export default store