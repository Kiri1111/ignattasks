import {postsApi, PostType} from "../../postsApi/api";
import {Dispatch} from "redux" ;

const initialState = {
    items: [] as PostType[]
}

type ActionsType = ReturnType<typeof fetchPostsSuccess>

export const postsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case  'POSTS/FETCHPOSTS':
            return {...state, items: action.payload.posts}
    }
    return state
}

const fetchPostsSuccess = (posts: PostType[]) => ({
    type: 'POSTS/FETCHPOSTS',
    payload: {posts}
} as const)

export const fetchPosts = () => async (dispatch: Dispatch) => {
    const posts = await postsApi.getPosts()
    dispatch(fetchPostsSuccess(posts))
}