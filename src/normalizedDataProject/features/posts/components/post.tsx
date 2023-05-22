import React from 'react';
import {PostType} from "../../../postsApi/api";

export const Post: React.FC<{ post: PostType }> = ({post}) => {
    return (
        <div>
            <b>{post.author.name}</b>
            <div>{post.text}</div>
        </div>
    );
};

