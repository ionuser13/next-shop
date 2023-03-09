import React, { useContext, useState } from 'react';
import AppContext from '@context/AppContext';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };
  const [imgError, setImgError] = useState(false);
  const fallBackSrc = 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';

  console.log(product.images);
  return (
    <div className={styles['ProductItem']}>
      {product.images[0] && (
        <Image
          src={imgError ? fallBackSrc : product.images[0]}
          alt={product.title}
          className={styles['ProductItem-img']}
          width={240}
          height={240}
          onError={() => {
            setImgError(true);
          }}
        />
      )}
      ;
      <div className={styles['product-info']}>
        <div>
          <p className={styles['product-info-div-p-1']}>$ {product.price}</p>
          <p className={styles['product-info-div-p-2']}>{product.title}</p>
        </div>
        <figure className={styles['product-info-figure']}>
          <Image onClick={() => handleClick(product)} src={addToCartIcon} alt="add to cart button" className={styles['product-info-figure-img']} width={35} height={35} />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
