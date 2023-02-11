import React, { useContext } from 'react';
import MyOrderSidePanel from "@components/OrderItem";
import AppContext from '@context/AppContext';
import styles from "@styles/Checkout.module.scss";

const Checkout = () => {
    const {state} = useContext(AppContext);
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum
    }
    return (
        <div className={styles["checkout"]}>
            <div className={styles["checkout-container"]}>
                <h1 className={styles["title"]}>My Order</h1>
                <div className={styles["checkout-content"]}>
                    <div className={styles["order"]}>
                        <p className={styles["order-p-1"]}>
                            <span className={styles["order-p-span-1"]}>{date}</span>
                            <span className={styles["order-p-span-2"]}>{state.cart.length} articles</span>
                        </p>
                        <p className={styles["order-p-2"]}>$ {sumTotal()}</p>
                    </div>
                </div>
                <MyOrderSidePanel product={state.cart.item}/>
            </div>
        </div>
    )
}

export default Checkout;
