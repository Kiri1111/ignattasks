import {postsApi, PostAPIType, AuthorAPIType} from "../../postsApi/api";
import {Dispatch} from "redux" ;
import {fetchPostsSuccess, mapToLookupTable} from "./posts-reducer";


const initialState = {
    //items: [] as PostType[],
    allIds: [] as number[],
    byID: {} as { [key: string]: AuthorAPIType }
}
type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof fetchPostsSuccess>

export const authorsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case  'POSTS/FETCH-POSTS':
            return {
                ...state,
                // items: action.payload.posts,
                allIds: action.payload.posts.map(el => el.author),
                byId: mapToLookupTable(action.payload.posts.map(el => el.author))
            }
        // case  'POSTS/UPDATE-POST':
        //     return {
        //         ...state,
        //         // items: state.items.map(el => el.id === action.payload.postID ? {
        //         //     ...el,
        //         //     text: action.payload.text
        //         // } : el)
        //         byID: {
        //             ...state.byID,
        //             [action.payload.postID]: {
        //                 ...state.byID[action.payload.postID],
        //                 text: action.payload.text
        //             }
        //         }
        //     }
    }
    return state
}
