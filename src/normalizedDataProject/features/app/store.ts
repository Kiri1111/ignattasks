import {applyMiddleware, combineReducers, createStore} from 'redux'
import {postsReducer} from "../posts/reducer";
import thunkMiddleware from 'redux-thunk'
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    posts: postsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch