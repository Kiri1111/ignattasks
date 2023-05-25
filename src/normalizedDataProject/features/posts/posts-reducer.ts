import {postsApi, PostAPIType} from "../../postsApi/api";
import {Dispatch} from "redux" ;

export const mapToLookupTable = (posts: any[]) => {
    return posts.reduce((acc, item) => {
        acc[item.id] = item
        return acc
    }, {})
}

export type PostType = {
    id: number
    text: string
    likes: number
    authorId: number
}

const initialState = {
    //items: [] as PostType[],
    allIds: [] as number[],
    byID: {} as { [key: string]: PostAPIType }
}
type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof fetchPostsSuccess> | ReturnType<typeof updatePostsText>

export const postsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case  'POSTS/FETCH-POSTS':
            return {
                ...state,
                // items: action.payload.posts,
                allIds: action.payload.posts.map(el => el.id),
                byId: mapToLookupTable(action.payload.posts)
            }
        case  'POSTS/UPDATE-POST':
            return {
                ...state,
                // items: state.items.map(el => el.id === action.payload.postID ? {
                //     ...el,
                //     text: action.payload.text
                // } : el)
                byID: {
                    ...state.byID,
                    [action.payload.postID]: {
                        ...state.byID[action.payload.postID],
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