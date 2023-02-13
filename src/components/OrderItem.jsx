import React from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import { useContext } from 'react';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';

const MyOrderSidePanel = ({ product, indexValue }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (index) => {
    removeFromCart(index);
  };
  return (
    <div className={styles.OrderItem}>
      <figure className={styles['OrderItem-figure']}>
        <Image src={product?.images[0]} alt={product?.title} className={styles['OrderItem-figure-img']} width={70} height={70} />
      </figure>
      <p className={styles['OrderItem-p-2']}>{product?.title}</p>
      <p className={styles['OrderItem-p-3']}>{product?.price}</p>
      <Image src={close} alt="close" onClick={() => handleRemove(indexValue)} className={styles['OrderItem-img']} />
    </div>
  );
};

export default MyOrderSidePanel;
