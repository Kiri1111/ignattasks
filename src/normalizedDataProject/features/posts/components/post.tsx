import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updatePost} from "../posts-reducer";
import {AppStateType} from "../../app/store";

export const Post: React.FC<{ postId: number }> = ({postId}) => {
    const dispatch = useDispatch()
    const post = useSelector((state: AppStateType) => state.posts.byID[postId])
    console.log(post)
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
}

