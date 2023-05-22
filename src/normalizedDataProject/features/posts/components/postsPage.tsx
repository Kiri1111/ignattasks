import React from 'react';
import {useSelector} from 'react-redux'
import {PostType} from "../../../postsApi/api";
import {Post} from "./post";

export const PostsPage: React.FC = ({}) => {
    const items = useSelector(state => state.posts.items)
    return (
        <div>
            {items.map((i: PostType) => <Post key={i.id} postItem={i}/>)}
        </div>
    );
};

