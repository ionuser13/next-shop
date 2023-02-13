import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/DesktopMenu';
import DesktopMobile from '@components/DesktopMobile';
import MyOrder from '@containers/MyOrder';
import menuIcon from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggleOrder = () => {
    setToggleOrder(!toggleOrder);
    setToggle(false);
  };
  const handleToggle = () => {
    setToggle(!toggle);
    setToggleOrder(false);
  };

  const [mobtog, setMobtog] = useState(false);
  const handleMobtog = () => {
    setMobtog(!mobtog);
  };

  return (
    <nav className={styles.nav}>
      <Image src={menuIcon} alt="menu" className={styles.menu} onClick={handleMobtog} />
      {mobtog && <DesktopMobile />}
      <div className={styles['navbar-left']}>
        <Link href="/" style={{ display: 'flex' }}>
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul className={styles['navbar-left-ul']}>
          <li>
            <Link href="/" className={styles['navbar-left-ul-li-a']}>
              All
            </Link>
          </li>
          <li>
            <Link href="/" className={styles['navbar-left-ul-li-a']}>
              Clothes
            </Link>
          </li>
          <li>
            <Link href="/" className={styles['navbar-left-ul-li-a']}>
              Electronics
            </Link>
          </li>
          <li>
            <Link href="/" className={styles['navbar-left-ul-li-a']}>
              Furnitures
            </Link>
          </li>
          <li>
            <Link href="/" className={styles['navbar-left-ul-li-a']}>
              Toys
            </Link>
          </li>
          <li>
            <Link href="/" className={styles['navbar-left-ul-li-a']}>
              Others
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul className={styles['navbar-right-ul']}>
          <li className={styles['navbar-email']}>
            <Link href="" onClick={handleToggle} onKeyDown={this?.handleToggle}>
              platzi@example.com
            </Link>
          </li>
          <li className={styles['navbar-shopping-cart']}>
            <Image src={shoppingCart} alt="shopping cart" onClick={handleToggleOrder} onKeyDown={this?.handleToggleOrder} />
            <div className={styles['navbar-shopping-cart-div']}>{state.cart.length}</div>
          </li>
        </ul>
      </div>
      {toggleOrder && <MyOrder setToggleOrder={setToggleOrder} />}
      {toggle && <Menu />}
    </nav>
  );
};
export default Header;
