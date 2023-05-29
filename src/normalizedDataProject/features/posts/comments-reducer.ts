import {postsApi, PostAPIType, AuthorAPIType, CommentAPIType} from "../../postsApi/api";
import {Dispatch} from "redux" ;
import {fetchPostsSuccess, mapToLookupTable} from "./posts-reducer";

export type CommentType = Omit<CommentAPIType, 'author'> & { authorId: number }


const initialState = {
    byId: {} as { [key: string]: CommentType }
}

type StateType = typeof initialState

type ActionsType =
    ReturnType<typeof fetchPostsCommentsSuccess>
    | ReturnType<typeof fetchPostsSuccess>

export const commentsReducer = (state = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case  'POSTS/FETCH-POSTS':
            return {
                ...state, byId: {
                    ...state.byId, ...mapToLookupTable(action.payload.posts.map(el => el.lastComment).flat().map(c => {
                        const comment: CommentType = {
                            id: c.id,
                            text: c.text,
                            authorId: c.author.id
                        }
                        return comment
                    }))
                }
            }

        case  'COMMENTS/FETCH-COMMENTS':
            const lookupTable = mapToLookupTable(action.payload.comments.map(c => {
                const comment: CommentType = {
                    id: c.id,
                    text: c.text,
                    authorId: c.author.id
                }
                return comment
            }))
            return {
                ...state,
                byId: {...state.byId, ...lookupTable}
            }
    }
    return state
}


export const fetchPostComments = (postId: number) => async (dispatch: Dispatch) => {
    const comments = await postsApi.getComments(postId)
    dispatch(fetchPostsCommentsSuccess(postId, comments))
}

export const fetchPostsCommentsSuccess = (postId: number, comments: CommentAPIType[]) => ({
    type: 'COMMENTS/FETCH-COMMENTS',
    payload: {postId, comments}
} as const)