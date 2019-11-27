import { combineReducers, createStore, applyMiddleware } from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from "./users/reducer";
import friendsReducer from "./friends/friendsReducer";
import messagesReducer from "./messages/messagesReducer";


const initialState ={}

const reducer = combineReducers<any>({
    userReducer: userReducer,
    friendsReducer: friendsReducer,
    messagesReducer: messagesReducer
});

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
export default store