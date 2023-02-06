import React, { useState, useContext } from 'react';
import Menu from "@components/DesktopMenu";
import DesktopMobile from "@components/DesktopMobile";
import MyOrder from '@containers/MyOrder';
import menuIcon from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "@context/AppContext";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import styles from "@styles/Header.module.scss"

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrder, setToggleOrder] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggleOrder = () => {
      setToggleOrder(!toggleOrder);
      setToggle(false)
    }
    const handleToggle = () => {
      setToggle(!toggle);
      setToggleOrder(false)
    }

    const [mobtog, setMobtog] = useState(false);
    const handleMobtog = () => {
      setMobtog(!mobtog);
    }

    return (
      <nav className={styles.nav}>
        <img src={menuIcon} alt="menu" className="menu" onClick={handleMobtog} />
        {mobtog && <DesktopMobile />}
        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo" />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>
              platzi@example.com
            </li>
            <li className="navbar-shopping-cart" onClick={handleToggleOrder}>
              <img src={shoppingCart} alt="shopping cart" />
              <div>{state.cart.length}</div>
            </li>
          </ul>
        </div>
        {toggleOrder && <MyOrder setToggleOrder={setToggleOrder} />}
        {toggle && <Menu />}
      </nav>
    );
}
export default Header