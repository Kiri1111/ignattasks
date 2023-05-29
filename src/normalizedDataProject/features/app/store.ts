import {applyMiddleware, combineReducers, createStore} from 'redux'
import {postsReducer} from "../posts/posts-reducer";
import thunkMiddleware from 'redux-thunk'
import {useDispatch} from "react-redux";
import {authorsReducer} from "../posts/authors-reducer";
import {commentsReducer} from "../posts/comments-reducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    authors: authorsReducer,
    comments: commentsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

// @ts-ignore
window.store = store