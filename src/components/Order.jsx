import React from 'react';
import flecha from "@icons/flechita.svg";
import Image from 'next/image';
import styles from"@styles/Order.module.scss";

const Order = () => {
    return (
        <div className={styles["Order"]}>
            <p className={styles["Order-p-1"]}>
                <span className={styles["Order-p-span-1"]}>03.25.21</span>
                <span className={styles["Order-p-span-2"]}>6 articles</span>
            </p>
            <p className={styles["Order-p-2"]}>$560.00</p>
            <Image src={flecha} alt="arrow" />
        </div>
    )
}

export default Order