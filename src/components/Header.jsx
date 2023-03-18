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
import styles from '@styles/header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  const [mobtog, setMobtog] = useState(false);
  const { state } = useContext(AppContext);
  const handleToggleOrder = () => {
    setToggleOrder(!toggleOrder);
    setToggle(false);
    setMobtog(false);
  };
  const handleToggle = () => {
    setToggle(!toggle);
    setToggleOrder(false);
  };

  const handleMobtog = () => {
    setMobtog(!mobtog);
    setToggleOrder(false);
  };
  const links = [
    {
      label: 'All',
      route: '/main/',
    },
    {
      label: 'Clothes',
      route: '/main/clothes',
    },
    {
      label: 'Electronics',
      route: '/main/electronics',
    },
    {
      label: 'Furnitures',
      route: '/main/furnitures',
    },
    {
      label: 'Shoes',
      route: '/main/shoes',
    },
    {
      label: 'Others',
      route: '/main/others',
    },
  ];

  return (
    <nav className={styles.nav}>
      <Image
        src={menuIcon}
        alt="menu"
        className={styles.menu}
        onClick={() => {
          handleMobtog();
        }}
      />
      <div className={`${styles['general']} ${mobtog ? styles['mobileMenuTRansitionedLeft'] : styles['mobileMenuTransitionLeft']}`}>
        <DesktopMobile />
      </div>
      <div className={styles['navbar-left']}>
        <Link href="/" style={{ display: 'flex' }}>
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul className={styles['navbar-left-ul']}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route} className={styles['navbar-left-ul-li-a']}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul className={styles['navbar-right-ul']}>
          <li className={styles['navbar-email']}>
            <Link
              href=""
              onClick={() => {
                handleToggle();
              }}
              onKeyDown={this?.handleToggle}
            >
              platzi@example.com
            </Link>
          </li>
          <li className={styles['navbar-shopping-cart']}>
            <Image
              src={shoppingCart}
              alt="shopping cart"
              onClick={() => {
                handleToggleOrder();
              }}
              onKeyDown={this?.handleToggleOrder}
            />
            <div className={styles['navbar-shopping-cart-div']}>{state.cart.length}</div>
          </li>
        </ul>
      </div>
      <div className={`${styles['general']}`}>
        <MyOrder toggleOrder={toggleOrder} setToggleOrder={setToggleOrder} />
      </div>
      {toggle && <Menu />}
    </nav>
  );
};
export default Header;
