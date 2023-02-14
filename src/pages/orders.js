import React from 'react';
import MyOrderSidePanel from '@components/OrderItem';
import styles from '@styles/Orders.module.scss';

const Orders = () => {
  return (
    <div className={styles['Orders']}>
      <div className={styles['Orders-container']}>
        <h1 className={styles['title']}>My Orders</h1>
        <div className={styles['Orders-content']}>
          <MyOrderSidePanel />
        </div>
      </div>
    </div>
  );
};

export default Orders;
