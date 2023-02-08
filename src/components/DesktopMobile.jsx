import React from 'react';
import styles from "@styles/desktopMobile.module.scss";

const DesktopMobile = () => {
    return (
      <div className={styles.mobileMenu}>
        <ul className={`${styles["mobileMenu-ul"]} ${styles["mobileMenu-ul-1"]}`}>
          <li className={`${styles["mobileMenu-ul-li"]}`}>
            <a href="/" className={`${styles["mobileMenu-ul-li-a"]}`}>CATEGORIES</a>
          </li>
          <li className={`${styles["mobileMenu-ul-li"]}`}>
            <a href="/" className={`${styles["mobileMenu-ul-li-a"]}`}>All</a>
          </li>
          <li className={`${styles["mobileMenu-ul-li"]}`}>
            <a href="/" className={`${styles["mobileMenu-ul-li-a"]}`}>Clothes</a>
          </li>
          <li className={`${styles["mobileMenu-ul-li"]}`}>
            <a href="/" className={`${styles["mobileMenu-ul-li-a"]}`}>Electronics</a>
          </li>
          <li className={`${styles["mobileMenu-ul-li"]}`}>
            <a href="/" className={`${styles["mobileMenu-ul-li-a"]}`}>Furnitures</a>
          </li>
          <li className={`${styles["mobileMenu-ul-li"]}`}>
            <a href="/" className={`${styles["mobileMenu-ul-li-a"]}`}>Toys</a>
          </li>
          <li className={`${styles["mobileMenu-ul-li"]}`}>
            <a href="/" className={`${styles["mobileMenu-ul-li-a"]}`}>Other</a>
          </li>
        </ul>

        <ul className={`${styles["mobileMenu-ul"]}`}>
          <li className={`${styles["mobileMenu-ul-li"]}`}>
            <a href="/" className={`${styles["mobileMenu-ul-li-a"]}`}>My orders</a>
          </li>
          <li className={`${styles["mobileMenu-ul-li"]}`}>
            <a href="/" className={`${styles["mobileMenu-ul-li-a"]}`}>My account</a>
          </li>
        </ul>

        <ul className={`${styles["mobileMenu-ul"]}`}>
          <li className={`${styles["mobileMenu-ul-li"]}`}>
            <a href="/" className={styles.email}>
              platzi@example.com
            </a>
          </li>
          <li className={`${styles["mobileMenu-ul-li"]}`}>
            <a href="/" className={styles["sign-out"]}>
              Sign out
            </a>
          </li>
        </ul>
      </div>
    );
}

export default DesktopMobile