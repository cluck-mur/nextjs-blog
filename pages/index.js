import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import {getSortedPostsData} from '../lib/posts'
import Date from '../components/date'

export default function Home({allPostData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          {/*
          Prepare for trouble,<br />
          and make it double<br />
          To protect the world from devastation,<br />
          To unite all people within our nation,<br />
          To denounce the evil of truth and love,<br />
          To extend our reach to the stars above<br />
          Jesse!<br />
          James!<br />
          Team Rocket blasts off at the speed of light,<br />
          Surrender now, or prepare to fight<br />
          Meowth, that's right!<br />
          */}
          Hello there! Welcome to the world of Pokémon! My name is Oak! People call me the Pokémon Prof! This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights. Myself… I study Pokémon as a profession. First, what is your name? Right! So your name is [player]! This is my grandson. He's been your rival since you were a baby. …Erm, what is his name again? That's right! I remember now! His name is [rival]! [player]! Your very own Pokémon legend is about to unfold! A world of dreams and adventures with Pokémon awaits! Let's go!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        Read <Link href="/posts/first-post"><a>this page!</a></Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}><a>{title}</a></Link>
              {/*<br />*/}
              {/*{id}*/}
              <br />
              <small className={utilStyles.lightText}>
                <Date datestring={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostData = getSortedPostsData()
  return {
    props: {
      allPostData
    }
  }
}