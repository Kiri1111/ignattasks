export type AuthorAPIType = {
    id: number
    name: string
}

export type PostAPIType = {
    id: number
    text: string
    likes: number
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
                    author: {id: 1, name: 'iiiigor'}
                },
                    {
                        id: 2,
                        text: 'Hello bro',
                        likes: 1220,
                        author: {id: 2, name: 'Viiiit999'}
                    },
                    {
                        id: 3,
                        text: 'respect',
                        likes: 10,
                        author: {id: 1, name: 'iiiigor'}
                    }])
            }, 2000)
        })
    },
    updatePost(postId: number, text: string) {
        return Promise.resolve()
    }
}