import React from 'react';
import {Provider} from 'react-redux';
import {PostsPage} from "./features/posts/components/postsPage";
import {store} from "./features/app/store";

export const NormalizedApp = () => {
    return (
        <div>
            <Provider store={store}>
                <PostsPage/>
            </Provider>
        </div>
    );
};
