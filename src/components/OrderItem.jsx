import React from 'react';
import AppContext from "@context/AppContext"
import close from "@icons/icon_close.png";
import { useContext } from "react";
import styles from "@styles/OrderItem.module.scss";

const MyOrderSidePanel = ({product, indexValue}) => {
  const {removeFromCart} = useContext(AppContext);
  const handleRemove = index => {
    removeFromCart(index);
  }
    return (
      <div className={styles.OrderItem}>
        <figure className={styles["Order-Item-figure"]}>
          <img src={product?.images[0]} alt={product?.title} className={styles["Order-Item-figure-img"]} />
        </figure>
        <p className={styles["OrderItem-p-2"]}>{product?.title}</p>
        <p className={styles["OrderItem-p-3"]}>{product?.price}</p>
        <img src={close} alt="close" onClick={() => handleRemove(indexValue)} className={styles["OrderItem-img"]} />
      </div>
    );
}

{/*OrderItem*/}

export default MyOrderSidePanel