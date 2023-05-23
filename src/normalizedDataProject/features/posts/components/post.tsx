import React, {useState} from 'react';
import {PostType} from "../../../postsApi/api";
import {useDispatch} from "react-redux";
import {updatePost} from "../reducer";

export const Post: React.FC<{ post: PostType }> = React.memo(({post}) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)
    const [newText, setNewText] = useState(post.text)
    return (
        <div>
            <br/>
            <b>{post.author.name}</b>
            {!editMode
                ? <div onClick={() => {
                    setEditMode(true)
                }}>{post.text}</div>
                : <div><input onBlur={() => {
                    // @ts-ignore
                    dispatch(updatePost(post.id, newText))
                    setEditMode(false)
                }} value={newText} onChange={(e) => setNewText(e.currentTarget.value)}/></div>}
            <br/>
            <div>Likes: {post.likes}</div>

            <hr/>
        </div>
    )
})

