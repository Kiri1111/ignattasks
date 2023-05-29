import {postsApi, PostAPIType, AuthorAPIType} from "../../postsApi/api";
import {Dispatch} from "redux" ;
import {fetchPostsSuccess, mapToLookupTable} from "./posts-reducer";
import {fetchPostsCommentsSuccess} from "./comments-reducer";


const initialState = {
    //items: [] as PostType[],
    // allIds: [] as number[],
    byId: {} as { [key: string]: AuthorAPIType }
}

type StateType = typeof initialState

type ActionsType =
    ReturnType<typeof fetchPostsSuccess>
    | ReturnType<typeof fetchPostsCommentsSuccess>

export const authorsReducer = (state = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case  'POSTS/FETCH-POSTS':
            return {
                ...state,
                byId: {
                    ...state.byId, ...mapToLookupTable(action.payload.posts.map(el => el.author)),
                    ...mapToLookupTable(action.payload.posts.map(el => el.lastComment).flat().map(el => el.author))
                }
            }
        case "COMMENTS/FETCH-COMMENTS":
            return {
                ...state,
                byId: {
                    ...state.byId, ...mapToLookupTable(action.payload.comments.map(el => el.author))
                }
            }
    }
    return state
}
