import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

import styles from '@styles/Navbar.module.scss';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <header role="navigation" className={styles.navbar}>
      <Link href="/">
        <a onClick={onClose}>
          <Image src="/logo.svg" width="40" height="40" alt="Logo" priority />
        </a>
      </Link>

      <nav className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
        <Link href="/">
          <a
            className={currentRoute == '/' ? styles.navActive : ''}
            onClick={onClose}
          >
            <span className={styles.navBoldText}>00</span> HOME
          </a>
        </Link>

        <Link href="/destination">
          <a
            className={currentRoute == '/destination' ? styles.navActive : ''}
            onClick={onClose}
          >
            <span className={styles.navBoldText}>01</span> DESTINATION
          </a>
        </Link>

        <Link href="/crew">
          <a
            className={currentRoute == '/crew' ? styles.navActive : ''}
            onClick={onClose}
          >
            <span className={styles.navBoldText}>02</span> CREW
          </a>
        </Link>

        <Link href="/technology">
          <a
            className={currentRoute == '/technology' ? styles.navActive : ''}
            onClick={onClose}
          >
            <span className={styles.navBoldText}>03</span> TECHNOLOGY
          </a>
        </Link>

        {isOpen && (
          <button
            type="button"
            name="close-menu-button"
            className={styles.closeMenuBtn}
            onClick={onClose}
          >
            <Image
              src="/icon-close.svg"
              width="24"
              height="21"
              alt="Close burger menu icon"
            />
          </button>
        )}
      </nav>

      {!isOpen && (
        <button
          type="button"
          name="open-menu-button"
          className={styles.openMenuBtn}
          onClick={onOpen}
        >
          <Image
            src="/icon-hamburger.svg"
            width="24"
            height="21"
            alt="Burger menu icon"
          />
        </button>
      )}
    </header>
  );
}
