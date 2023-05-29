import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Post} from "./post";
import {AppStateType, useAppDispatch} from "../../app/store";
import {fetchPosts} from "../posts-reducer";

export const PostsPage: React.FC = ({}) => {

    const ids = useSelector((state: AppStateType) => state.posts.allIds)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchPosts())
    }, [])
    return (
        <div>
            {ids.map(id => <Post key={id} postId={id}/>)}
        </div>
    );
};

