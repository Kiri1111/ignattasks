import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Post} from "./post";
import {AppStateType, useAppDispatch} from "../../app/store";
import {fetchPosts} from "../reducer";

export const PostsPage: React.FC = ({}) => {

    const items = useSelector((state: AppStateType) => state.posts.items)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <div>
            {items.map(i => <Post key={i.id} post={i}/>)}
        </div>
    );
};

