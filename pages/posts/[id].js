import Head from 'next/head'
import Layout from "../../components/layout";
import { getAllPostIds, getPostData  } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css'

export default function Post({postData}) {
	return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className="grid">
                <article>
                    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                    <div className={utilStyles.lightText}>
                        <Date dateString={postData.date} />
                        <p className={utilStyles.darkText}>{postData.description}</p>
                    </div>
                </article>
            </div>
           
        </Layout>
    );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id. getStaticProps is 
    //given the params which contains id
    const postData = getPostData(params.id)
    return {
        props: {
        postData
        }
    }
}
