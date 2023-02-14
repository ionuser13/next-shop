import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/notFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles['NotFound']}>
      <Image src={logo} alt="main logo" className={styles['notfound-logo']} />
      <div className={styles['lower-container']}>
        <h1 className={styles['lost']}>Oh no... We lost this page</h1>
        <div className={styles['description-container']}>
          <p>We searched everywhere but couldn&apos;t find what you are looking for.</p>
          <p>Let&apos;s find a better place for you to go.</p>
        </div>
        <div className={'back'}>
          <button className={styles['primary-button']}>
            <Link href="/" className={styles['home-link']}>
              Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
