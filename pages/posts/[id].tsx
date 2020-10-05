import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
    postData
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {/* #region [レッスン5. 動的ルーティング] - [CSS を追加する]*/} 
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                {/*{postData.id}*/}
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
            </article>
            {/* #endregion [レッスン5. 動的ルーティング] - [CSS を追加する]*/} 
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

/**
 * ブログへの投稿データを取得する
 * @param {*} param0 
 */
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
        postData
        }
    }
}
