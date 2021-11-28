import Head from 'next/head';

import styles from '@styles/InternalError.module.scss';

export default function InternalError() {
  return (
    <>
      <Head>
        <title>Internal Error</title>
      </Head>

      <div className={styles.bgImage}></div>

      <main className={styles.mainContent}>
        <h1>Something went wrong with the mission</h1>

        <p className="sub-heading">
          An internal server error occured. Try again later.
        </p>
      </main>
    </>
  );
}
