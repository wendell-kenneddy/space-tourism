import { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import Data from '@data/destinations.json';

import styles from '@styles/Destination.module.scss';

interface DestinationData {
  name: string;
  id: number;
  images: {
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

interface DestinationPageProps {
  destinations: DestinationData[];
}

export default function Destination({ destinations }: DestinationPageProps) {
  const [currentDestination, setCurrentDestination] = useState<DestinationData>(
    destinations[0]
  );
  const pageTitle = 'Space Tourism | Destination';
  const pageDescription = 'Information about the destinations.';

  const selectDestination = (id: number) => {
    if (currentDestination.id === id) return;

    setCurrentDestination(destinations[id - 1]);
  };

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

      <main className={styles.mainContent}>
        <h1 className="heading-5">
          <span>01</span>
          Pick up your destination
        </h1>

        <section className={styles.destinationInfo}>
          <h2 className="sr-only">Destination Info</h2>

          <div className={styles.destinationImage}>
            <Image
              src={currentDestination.images.webp}
              layout="fill"
              alt={`Image of ${currentDestination.name}`}
              priority={true}
            />
          </div>

          <div className={styles.textContent}>
            <div className={styles.destinationSelector}>
              {destinations.map((destination) => (
                <span
                  className={`sub-heading-2 ${
                    currentDestination.name == destination.name
                      ? styles.active
                      : ''
                  }`}
                  key={destination.id}
                  onClick={() => selectDestination(destination.id)}
                >
                  {destination.name}
                </span>
              ))}
            </div>

            <h3 className="heading-1">{currentDestination.name}</h3>

            <p>{currentDestination.description}</p>

            <div className={styles.divider}></div>

            <div className={styles.distanceInfo}>
              <div>
                <span className="sub-heading-2">Avg. distance</span>
                <span className="sub-heading">
                  {currentDestination.distance}
                </span>
              </div>

              <div>
                <span className="sub-heading-2">Est. Travel Time</span>
                <span className="sub-heading">{currentDestination.travel}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { destinations: Data }
  };
}
