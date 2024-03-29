import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import flecha from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = ({ toggleOrder, setToggleOrder }) => {
  const { state } = useContext(AppContext);
  const sumPrices = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  const handleClose = () => setToggleOrder(false);

  // const [imgSrc, setImgSrc] = useState("");
  // const handleChange = () => {
  //   setImgSrc(state.cart[0])
  // }

  return (
    <div className={`${styles.MyOrder} ${toggleOrder ? styles['mobileMenuTRansitionedRight'] : styles['mobileMenuTransitionRight']}`}>
      <div className={styles['title-container']}>
        <Image src={flecha} alt="arrow" onClick={handleClose} className={`${styles['title-container-img']}`} />
        <p className="title">My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map((item, index) => {
          return <OrderItem indexValue={index} product={item} key={`orderItem-${item.id}`} />;
        })}
      </div>
      <div className={styles.order}>
        <p className={styles['order-p-1']}>
          <span className={styles['order-p-span-1']}>Total</span>
        </p>
        <p className={styles['order-p-2']}>${sumPrices()}</p>
      </div>
      <Link href="/checkout" className={styles['primary-button']}>
        Checkout
      </Link>
    </div>
  );
};

export default MyOrder;
