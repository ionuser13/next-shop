import React from 'react';
import Link from 'next/link';
import styles from '@styles/menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul className={styles['Menu-ul']}>
        <li className={`${styles['Menu-ul-li']} ${styles['Menu-ul-li-1']}`}>
          <Link href="/" className={`${styles.title} ${styles['Menu-ul-li-a']}`}>
            My orders
          </Link>
        </li>

        <li className={styles['Menu-ul-li-2']}>
          <Link href="/" className={styles['Menu-ul-li-a']}>
            My account
          </Link>
        </li>

        <li className={styles['Menu-ul-li-3']}>
          <Link href="/" className={`${styles['Menu-ul-li-3-a']} ${styles['Menu-ul-li-a']}`}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};
{
  /*Menu*/
}
export default Menu;
