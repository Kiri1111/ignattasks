import {combineReducers, createStore} from 'redux'
import {postsReducer} from "../posts/reducer";

const store = createStore(combineReducers({
    posts: postsReducer
}))