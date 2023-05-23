import {postsApi, PostType} from "../../postsApi/api";
import {Dispatch} from "redux" ;
import {post} from "jquery";

const initialState = {
    items: [] as PostType[]
}

type ActionsType = ReturnType<typeof fetchPostsSuccess> | ReturnType<typeof updatePostsText>

export const postsReducer = (state = initialState, action: ActionsType): { items: PostType[] } => {
    switch (action.type) {
        case  'POSTS/FETCH-POSTS':
            return {...state, items: action.payload.posts}
        case  'POSTS/UPDATE-POST':
            return {
                ...state, items: state.items.map(el => el.id === action.payload.postID ? {
                    ...el,
                    text: action.payload.text
                } : el)
            }
    }
    return state
}

const fetchPostsSuccess = (posts: PostType[]) => ({
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