import Data from '@data/crew.json';

import Head from 'next/head';
import Image from 'next/image';

import styles from '@styles/Crew.module.scss';
import { useState } from 'react';

interface CrewMemberData {
  name: string;
  id: number;
  images: {
    webp: string;
  };
  role: string;
  bio: string;
}

interface CrewProps {
  crewMembers: CrewMemberData[];
}

export default function Crew({ crewMembers }: CrewProps) {
  const [currentCrewMember, setCurrentCrewMember] = useState<CrewMemberData>(
    crewMembers[0]
  );
  const pageTitle = 'Space Tourism | Crew';
  const pageDescription = 'Information about the crew members.';
  const pageUrl = 'https://spacetourismwk.vercel.app/crew';

  const selectCrewMember = (id: number) => {
    if (crewMembers.length < id - 1) return;
    if (currentCrewMember.id == id) return;

    setCurrentCrewMember(crewMembers[id - 1]);
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
          <span>02</span>
          Meet your crew
        </h1>

        <section className={styles.crewMemberInfo}>
          <h2 className="sr-only">Crew Member Info</h2>

          <div className={styles.crewMemberImage}>
            <Image
              src={currentCrewMember.images.webp}
              alt={`Image of ${currentCrewMember.name}`}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          <div className={styles.crewMemberContent}>
            <div className={styles.crewMemberSelector}>
              {crewMembers.map((crewMember) => (
                <button
                  className={`${styles.crewMemberSelectorBtn} ${
                    currentCrewMember.id == crewMember.id ? styles.active : ''
                  }`}
                  key={crewMember.id}
                  onClick={() => selectCrewMember(crewMember.id)}
                >
                  <span className="sr-only">{crewMember.id}</span>
                </button>
              ))}
            </div>

            <div className={styles.textContent}>
              <h3 className="heading-3">
                <span className="sub-heading-2">{currentCrewMember.role}</span>
                {currentCrewMember.name}
              </h3>

              <p>{currentCrewMember.bio}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const crewMembers = Data;

  return {
    props: { crewMembers }
  };
}
