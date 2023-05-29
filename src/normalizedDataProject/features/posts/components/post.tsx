import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updatePost} from "../posts-reducer";
import {AppStateType} from "../../app/store";

export const Post: React.FC<{ postId: number }> = ({postId}) => {
    const dispatch = useDispatch()
    const post = useSelector((state: AppStateType) => state.posts.byId[postId])
    const author = useSelector((state: AppStateType) => state.authors.byId[post.authorId])
    console.log(post)
    const [editMode, setEditMode] = useState(false)
    const [newText, setNewText] = useState(post.text)
    return (
        <div>
            <br/>
            <b>{author.name}</b>
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
            Comments:
            <ul>
                {post.commentsIds.map(id => <Comment key={id} id={id}/>)}
            </ul>
            <hr/>

        </div>
    )
}

type PropsType = {
    id: number
}

const Comment: React.FC<PropsType> = ({id}) => {
    const comment = useSelector((state: AppStateType) => state.comments.byId[id])
    const author = useSelector((state: AppStateType) => state.authors.byId[comment.authorId])
    return (
        <li><b>{author.name}: </b>{comment.text}</li>
    )
}