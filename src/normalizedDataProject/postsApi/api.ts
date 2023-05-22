type AuthorType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    text: string
    likes: number
    author: AuthorType
}


export const postsApi = {
    getPosts(): Promise<PostType[]> {
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
                    }])
            }, 2000)
        })
    }
}