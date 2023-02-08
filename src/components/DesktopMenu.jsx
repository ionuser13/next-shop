import React from 'react';
import styles from "@styles/menu.module.scss";

const Menu = () => {
    return (
      <div className={styles.Menu}>
        <ul className={styles["Menu-ul"]}>
          <li className={`${styles["Menu-ul-li"]} ${styles["Menu-ul-li-1"]}`}>
            <a href="/" className={`${styles.title} ${styles["Menu-ul-li-a"]}`}>
              My orders
            </a>
          </li>

          <li className={styles["Menu-ul-li-2"]}>
            <a href="/" className={styles["Menu-ul-li-a"]}>My account</a>
          </li>

          <li className={styles["Menu-ul-li-3"]}>
            <a href="/" className={`${styles["Menu-ul-li-3-a"]} ${styles["Menu-ul-li-a"]}`}>Sign out</a>
          </li>
        </ul>
      </div>
    );
}
{/*Menu*/}
export default Menu