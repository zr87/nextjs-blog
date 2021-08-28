import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello, I'm <strong>Zoltan</strong>. I'm a software developer focused on web technologies. Open to hire.
                    <br/>
                    Contact me on <a href="https://www.linkedin.com/in/zoltanrakottyay/" target="_blank">linkedin</a>
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>

        </Layout>
    )
}
