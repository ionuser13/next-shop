import React from 'react';
import Image from 'next/image';
import styles from "@styles/ShoppingCartItem.module.scss"

const ShoppingCartItem = () => {
    return (
      <div className={styles["ShoppingCartItem"]}>
        <figure className={styles["ShoppingCartItem-figure"]}>
          <Image
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="bike"
            className={styles["ShoppingCartItem-figure-img"]}
          />
        </figure>
        <p className={styles["ShoppingCartItem-p-2"]}>Bike</p>
        <p className={styles["ShoppingCartItem-p-3"]}>$30,00</p>
      </div>
    );
}
{/*ShopingCartItem*/}
export default ShoppingCartItem 