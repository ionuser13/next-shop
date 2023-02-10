import React from 'react';
import close from "@icons/icon_close.png";
import addToCart from "@icons/bt_add_to_cart.svg";
import Image from 'next/image';
import styles from "@styles/productInfo.module.scss";

const ProductInfo = () => {
    return (
      <aside className={styles["product-detail"]}>
        <div className={styles["product-detail-close"]}>
          <Image src={close} alt="close" />
        </div>
        <Image
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="bike"
          className={styles["product-detail-img-2"]}
        />
        <div className={styles["ProductInfo"]}>
          <p className={styles["ProductInfo-p-1"]}>$35,00</p>
          <p className={styles["ProductInfo-p-2"]}>Bike</p>
          <p className={styles["ProductInfo-p-3"]}>
            With its practical position, this bike also fulfills a decorative
            function, add your hall or workspace.
          </p>
          <button className={`${styles["primary-button"]} ${styles["add-to-cart-button"]}`}>
            <Image src={addToCart} alt="add to cart" />
            Add to cart
          </button>
        </div>
      </aside>
    );
}
 {/*Product Info*/}
export default ProductInfo