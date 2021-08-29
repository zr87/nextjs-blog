import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPostsData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    return res.json()
}

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    // Sort posts by date
    return allPostsData.sort(({date: a}, {date: b}) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}

export async function getAllPostIds() {
    const posts = await getPostsData();
    const pathsObj = posts.map(post => ({
        params: {
            id: post.id.toString()
        }
    }))

    return pathsObj
}

export async function getPostData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}