import React, { useState } from 'react';
import close from '@icons/icon_close.png';
import addToCart from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';
import styles from '@styles/productInfo.module.scss';

const ProductInfo = ({ toggleInfo, setToggleInfo, product }) => {
  const filteredImages = product.images.filter((img) => img.startsWith('https://'));
  const firsImg = filteredImages[0];
  const [imgError, setImgError] = useState(false);
  const fallBackSrc = 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';
  const handleInfo = () => {setToggleInfo(false)}
  return (
    <aside className={`${styles['product-detail']} ${toggleInfo ? styles['mobileMenuTRansitionedRight'] : styles['mobileMenuTransitionRight']}`}>
      <div className={styles['product-detail-close']}>
        <Image src={close} alt="close" onClick={handleInfo}/>
      </div>
      <Image
        src={imgError ? fallBackSrc : firsImg}
        alt={product.description}
        className={styles['product-detail-img-2']}
        width={940}
        height={650}
        onError={() => {
          setImgError(true);
        }}
      />
      <div className={styles['ProductInfo']}>
        <p className={styles['ProductInfo-p-1']}>$ {product.price}</p>
        <p className={styles['ProductInfo-p-2']}>{product.title}</p>
        <p className={styles['ProductInfo-p-3']}>{product.description}</p>
        <button className={`${styles['primary-button']} ${styles['add-to-cart-button']}`}>
          <Image src={addToCart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </aside>
  );
};
export default ProductInfo;

