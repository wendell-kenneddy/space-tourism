import { useEffect, useState } from 'react';

import Image from 'next/image';
import Head from 'next/head';

import { useWindowSize } from 'src/hooks/useWindowSize';

import Data from '@data/techologies.json';

import styles from '@styles/Technology.module.scss';

interface TechnologyData {
  name: string;
  id: number;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

interface TechnologyProps {
  technologies: TechnologyData[];
}

export default function Technology({ technologies }: TechnologyProps) {
  const [currentTechnology, setCurrentTechnology] = useState<TechnologyData>(
    technologies[0]
  );
  const { width } = useWindowSize();
  const [imgUrl, setImgUrl] = useState('');
  const pageTitle = 'Space Tourism | Technology';
  const pageDescription = 'Information about the mission technologies.';
  const pageUrl = 'https://spacetourismwk.vercel.app/technology';

  const selectTechnology = (id: number) => {
    if (currentTechnology.id == id) return;
    if (technologies.length < id - 1) return;

    setCurrentTechnology(technologies[id - 1]);
  };

  useEffect(() => {
    if (width) {
      width >= 1024
        ? setImgUrl(currentTechnology.images.portrait)
        : setImgUrl(currentTechnology.images.landscape);
    }
  }, [width, currentTechnology]);

  return (
    <>
      <Head>
        <meta name="description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content={pageUrl} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:url" content={pageUrl} />
        <title>{pageTitle}</title>
        <link rel="canonical" href={pageUrl} />
      </Head>

      <div className={styles.bgImage}></div>

      <main className={styles.mainContent}>
        <h1 className="heading-5">
          <span>03</span>
          Space launch 101
        </h1>

        <section className={styles.technologyInfo}>
          <h2 className="sr-only">Technology info</h2>

          <div className={styles.technologyImage}>
            {imgUrl && (
              <Image
                src={imgUrl}
                layout="fill"
                alt={`${currentTechnology.name} image`}
                priority
              />
            )}
          </div>

          <div className={styles.technologyContent}>
            <div className={styles.technologySelector}>
              {technologies.map((tech) => (
                <button
                  className={`${styles.selectorBtn} ${
                    currentTechnology.id == tech.id ? styles.active : ''
                  }`}
                  key={tech.id}
                  onClick={() => selectTechnology(tech.id)}
                >
                  <span className="heading-4">{tech.id}</span>
                </button>
              ))}
            </div>

            <div className={styles.textContent}>
              <span className="sub-heading-2">The terminology...</span>

              <h3 className="heading-3">{currentTechnology.name}</h3>

              <p>{currentTechnology.description}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const technologies = Data;

  return {
    props: { technologies }
  };
}
