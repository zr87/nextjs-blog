const API_URL = 'https://jsonplaceholder.typicode.com/';

export async function getPostsData() {
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

export async function getPostData(id) {
    const res = await fetch(API_URL + `posts/${id}`)
    return res.json()
}