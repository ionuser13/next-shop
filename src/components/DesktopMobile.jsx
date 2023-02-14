import React from 'react';
import Link from 'next/link';
import MyAccountMobile from '@pages/my-account';
import styles from '@styles/desktopMobile.module.scss';

const DesktopMobile = () => {
  return (
    <div className={styles.mobileMenu}>
      <ul className={`${styles['mobileMenu-ul']} ${styles['mobileMenu-ul-1']}`}>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/" className={`${styles['mobileMenu-ul-li-a']}`}>
            CATEGORIES
          </Link>
        </li>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/" className={`${styles['mobileMenu-ul-li-a']}`}>
            All
          </Link>
        </li>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/" className={`${styles['mobileMenu-ul-li-a']}`}>
            Clothes
          </Link>
        </li>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/" className={`${styles['mobileMenu-ul-li-a']}`}>
            Electronics
          </Link>
        </li>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/" className={`${styles['mobileMenu-ul-li-a']}`}>
            Furnitures
          </Link>
        </li>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/" className={`${styles['mobileMenu-ul-li-a']}`}>
            Toys
          </Link>
        </li>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/" className={`${styles['mobileMenu-ul-li-a']}`}>
            Other
          </Link>
        </li>
      </ul>

      <ul className={`${styles['mobileMenu-ul']}`}>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/" className={`${styles['mobileMenu-ul-li-a']}`}>
            My orders
          </Link>
        </li>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="my-account" className={`${styles['mobileMenu-ul-li-a']}`}>
            My account
          </Link>
        </li>
      </ul>

      <ul className={`${styles['mobileMenu-ul']}`}>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/" className={styles.email}>
            platzi@example.com
          </Link>
        </li>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/" className={styles['sign-out']}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMobile;
