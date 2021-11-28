import Link from 'next/link';
import Head from 'next/head';

import styles from '@styles/Home.module.scss';

export default function Home() {
  const pageTitle = 'Space Tourism';
  const pageDescription = 'An outer space exploring experience.';

  return (
    <>
      <Head>
        <meta name="description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <title>{pageTitle}</title>
      </Head>

      <div className={styles.bgImage}></div>

      <main className={styles.mainContent} role="main">
        <div className={styles.textContent}>
          <h1 className="heading-1">
            <span className="heading-5">So, you want to travel to</span> space
          </h1>

          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link href="/destination">
          <a className={styles.exploreBtn}>
            <span className="heading-4">Explore</span>
          </a>
        </Link>
      </main>
    </>
  );
}
