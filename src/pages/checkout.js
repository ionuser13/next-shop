import React from 'react';
import OrderItem from "@components/OrderItem";
import styles from "@styles/Checkout.module.scss";

const Checkout = () => {
    return (
        <div className={styles["checkout"]}>
            <div className={styles["checkout-container"]}>
                <h1 className={styles["title"]}>My Order</h1>
                <div className={styles["checkout-content"]}>
                    <div className={styles["order"]}>
                        <p className={styles["order-p-1"]}>
                            <span className={styles["order-p-span-1"]}>03.25.21</span>
                            <span className={styles["order-p-span-2"]}>6 articles</span>
                        </p>
                        <p className={styles["order-p-2"]}>$560.00</p>
                    </div>
                </div>
                <OrderItem />
            </div>
        </div>
    )
}

export default Checkout;
