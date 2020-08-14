import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from '../components/date';

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <h1 className="title">
					Read{" "}
					<Link href="/posts/first-post">
						<a>this page!</a>
					</Link>
				</h1>

				<p className="description">
					Get started by editing any page at that path{" "}
					<code>pages/index.js</code>
				</p>

				<div className="grid">
					<section className={utilStyles.headingMd}>
						<p>
							Hello, I'm Ekta Rathi. I am a Front End Developer expertise in
							creating responsive web applications using Latest JS Frameworks.
						</p>
						<p>
							(This is a sample website - you’ll be building a site like this on{" "}
							<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
						</p>
            <h2 className={utilStyles.headingLg}>Blog</h2>
						<ul className={utilStyles.list}>
							{allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
							))}
						</ul>
					</section>
					<a href="https://nextjs.org/docs" className="card">
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className="card">
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/zeit/next.js/tree/master/examples"
						className="card"
					>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className="card"
					>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>

			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<img src="/vercel.svg" alt="Vercel Logo" className="logo" />
				</a>
			</footer>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
