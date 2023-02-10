import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className={styles['ProductItem']}>
      <Image src={product.images[0]} alt={product.title} className={styles['ProductItem-img']} />
      <div className={styles['product-info']}>
        <div>
          <p className={styles['product-info-div-p-1']}>$ {product.price}</p>
          <p className={styles['product-info-div-p-2']}>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)} className={styles['product-info-figure']}>
          <Image src={addToCartIcon} alt="add to cart button" className={styles['product-info-figure-img']} />
        </figure>
      </div>
    </div>
  );
};

{
  /*Product Item*/
}

export default ProductItem;
