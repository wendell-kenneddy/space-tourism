import Head from 'next/head';

import styles from '@styles/Offline.module.scss';

export default function Offline() {
  return (
    <>
      <Head>
        <title>Offline</title>
      </Head>

      <main className={styles.mainContent}>
        <h1>Looks like the destination could not be reached</h1>

        <p className="sub-heading">You are offline at the moment.</p>
      </main>
    </>
  );
}
