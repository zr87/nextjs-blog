import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getPostsData, Post } from '../lib/posts'
import Link from "next/link";
import {GetServerSideProps} from "next";

export default function Home(
    { allPostsData }: { allPostsData: Post[]}
) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello, I'm <strong>Zoltan</strong>. I'm a software developer focused on web technologies.
                    <br/>
                    Open to hire.
                    Contact me on <a href="https://www.linkedin.com/in/zoltanrakottyay/" target="_blank">linkedin</a>
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, title, body }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <div>
                                    <a className={utilStyles.capitalize}> {title}</a><br/>
                                    <span className={utilStyles.lightText}>id:{id}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

        </Layout>
    )
}

/*export async function getStaticProps() {
    const allPostsData = getSortedPostsData()

    return {
        props: {
            allPostsData
        }
    }
}*/

// Because getServerSideProps is called at request time,
// its parameter (context) contains request specific parameters.
export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await getPostsData()

    return {
        props: {
            allPostsData:data
        }
    }
}