import React from 'react';
import ProductInfo from '@components/ProductInfo';
import close from '@icons/icon_close.png';
import Image from 'next/image';
import styles from '@styles/ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className={styles['ProductDetail']}>
      <div className={styles['product-detail-close']}>
        <Image src={close} alt="close" className={styles['ProductDetail-img']} />
      </div>
      <ProductInfo />
    </div>
  );
};

export default ProductDetail;
