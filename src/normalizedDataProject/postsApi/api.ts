export type AuthorAPIType = {
    id: number
    name: string
}

export type PostAPIType = {
    id: number
    text: string
    likes: number
    author: AuthorAPIType
    lastComment: CommentAPIType[]
}

export type CommentAPIType = {
    id: number
    text: string,
    author: AuthorAPIType
}


export const postsApi = {
    getPosts(): Promise<PostAPIType[]> {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res([{
                    id: 1,
                    text: 'gg all',
                    likes: 120,
                    author: {id: 1, name: 'iiiigor'},
                    lastComment: [{
                        id: 998,
                        text: 'Great',
                        author: {id: 4, name: 'Valli'}
                    }, {id: 997, text: 'super contants', author: {id: 4, name: 'Valli'}}]
                },
                    {
                        id: 2,
                        text: 'Hello bro',
                        likes: 1220,
                        author: {id: 2, name: 'Viiiit999'},
                        lastComment: []
                    },
                    {
                        id: 3,
                        text: 'respect',
                        likes: 10,
                        author: {id: 1, name: 'iiiigor'},
                        lastComment: [{id: 995, text: 'perfect', author: {id: 2, name: 'vit9'}}]
                    }])
            }, 2000)
        })
    },
    getComments(postId: number) {
        return Promise.resolve([{id: 995, text: 'perfect', author: {id: 2, name: 'vit9'}}, {
            id: 994,
            text: 'cool',
            author: {id: 2, name: 'vit9'}
        }, {id: 993, text: 'bad', author: {id: 2, name: 'vit9'}}])
    },
    updatePost(postId: number, text: string) {
        return Promise.resolve()
    }
}