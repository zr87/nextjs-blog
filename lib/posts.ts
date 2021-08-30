const API_URL = 'https://jsonplaceholder.typicode.com/';

export interface Post {
    id: number,
    title: string,
    body: string
}

export async function getPostsData(): Promise<Post[]> {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch(API_URL + 'posts?_limit=10');
    return res.json()
}

export async function getAllPostIds() {
    const posts = await getPostsData()

    return posts.map(post => ({
        params: {
            id: post.id.toString()
        }
    }))
}

export async function getPostData(id: string): Promise<Post> {
    const res = await fetch(API_URL + `posts/${id}`)
    return res.json()
}