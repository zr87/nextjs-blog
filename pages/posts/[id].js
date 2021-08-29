import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import utilStyles from '../../styles/utils.module.scss'
import Head from "next/head";
import cx from 'classnames'

export default function Post({ postData }) {
    return(

        <Layout>
            <Head>
                <title>{postData.title} | ZR87's blog'</title>
            </Head>
            <article>
                <h2 className={ cx(utilStyles.capitalize, utilStyles.headingXl) }>{postData.title}</h2>
                <p>{postData.body}</p>
                <sub className={utilStyles.lightText}>id:{postData.id}</sub>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = await getAllPostIds()
    // console.log(paths)
    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}