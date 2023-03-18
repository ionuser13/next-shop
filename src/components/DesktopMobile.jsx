import React from 'react';
import Link from 'next/link';
import styles from '@styles/desktopMobile.module.scss';

const DesktopMobile = () => {
  const links = [
    {
      label: 'All',
      route: '/main',
    },
    {
      label: 'Clothes',
      route: '/clothes',
    },
    {
      label: 'Electronics',
      route: '/electronics',
    },
    {
      label: 'Furnitures',
      route: '/furnitures',
    },
    {
      label: 'Toys',
      route: '/toys',
    },
    {
      label: 'Others',
      route: '/others',
    },
  ];
  return (
    <div className={styles.mobileMenu}>
      <ul className={`${styles['mobileMenu-ul']} ${styles['mobileMenu-ul-1']}`}>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/" className={`${styles['mobileMenu-ul-li-a']}`}>
            CATEGORIES
          </Link>
        </li>
        {links.map(({ label, route }) => (
          <li className={`${styles['mobileMenu-ul-li']}`} key={route}>
            <Link href={route} className={`${styles['mobileMenu-ul-li-a']}`}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <ul className={`${styles['mobileMenu-ul']}`}>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/" className={`${styles['mobileMenu-ul-li-a']}`}>
            My orders
          </Link>
        </li>
        <li className={`${styles['mobileMenu-ul-li']}`}>
          <Link href="/my-account" className={`${styles['mobileMenu-ul-li-a']}`}>
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
