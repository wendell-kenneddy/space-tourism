import Head from 'next/head';

import styles from '@styles/NotFound.module.scss';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>

      <div className={styles.bgImage}></div>

      <main className={styles.mainContent}>
        <h1>Looks like you have reached the end of the universe</h1>

        <p className="sub-heading">
          The requested route does not seem to exist.
        </p>
      </main>
    </>
  );
}
