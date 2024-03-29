import {postsApi, PostAPIType} from "../../postsApi/api";
import {Dispatch} from "redux" ;
import {fetchPostsCommentsSuccess} from "./comments-reducer";


type LookupTableType<T> = { [key: string]: T }

export const mapToLookupTable = <T extends { id: number }>(posts: T[]): LookupTableType<T> => {
    const acc: LookupTableType<T> = {}
    return posts.reduce((acc, item) => {
        acc[item.id] = item
        return acc
    }, acc)
}

export type PostType = {
    id: number
    text: string
    likes: number
    authorId: number
    commentsIds: number[]
}

const initialState = {
    //items: [] as PostType[],
    allIds: [] as number[],
    byId: {} as { [key: string]: PostType }
}
type InitialStateType = typeof initialState
type ActionsType =
    ReturnType<typeof fetchPostsSuccess>
    | ReturnType<typeof updatePostsText>
    | ReturnType<typeof fetchPostsCommentsSuccess>

export const postsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case  'POSTS/FETCH-POSTS':
            return {
                ...state,
                // items: action.payload.posts,
                allIds: action.payload.posts.map(el => el.id),
                byId: mapToLookupTable(action.payload.posts.map(p => {
                    const copy: PostType = {
                        id: p.id,
                        likes: p.likes,
                        text: p.text,
                        authorId: p.author?.id,
                        commentsIds: p.lastComment.map(c => c.id)
                    }

                    return copy
                }))
            }
        case "COMMENTS/FETCH-COMMENTS":
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.postId]: {
                        ...state.byId[action.payload.postId],
                        commentsIds: action.payload.comments.map(c => c.id)
                    }
                }
            }
        case  'POSTS/UPDATE-POST':
            return {
                ...state,
                // items: state.items.map(el => el.id === action.payload.postID ? {
                //     ...el,
                //     text: action.payload.text
                // } : el)
                byId: {
                    ...state.byId,
                    [action.payload.postID]: {
                        ...state.byId[action.payload.postID],
                        text: action.payload.text
                    }
                }
            }
    }
    return state
}

export const fetchPostsSuccess = (posts: PostAPIType[]) => ({
    type: 'POSTS/FETCH-POSTS',
    payload: {posts}
} as const)
const updatePostsText = (postID: number, text: string) => ({
    type: 'POSTS/UPDATE-POST',
    payload: {postID, text}
} as const)

export const fetchPosts = () => async (dispatch: Dispatch) => {
    const posts = await postsApi.getPosts()
    dispatch(fetchPostsSuccess(posts))
}
export const updatePost = (postId: number, text: string) => async (dispatch: Dispatch) => {
    const result = await postsApi.updatePost(postId, text)
    dispatch(updatePostsText(postId, text))
}