import React, { useContext, useState } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext";
import flecha from "@icons/flechita.svg";
import styles from "@styles/MyOrder.module.scss";

const MyOrder = ({setToggleOrder}) => {
  const { state } = useContext(AppContext);
  const sumPrices = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  const handleClose = () => setToggleOrder(false)
  return (
    <div className={styles.MyOrder}>
      <div className="title-container">
        <img src={flecha} alt="arrow" onClick={handleClose}/>
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">    
        {state.cart.map((item, index) => {
          return <OrderItem indexValue={index} product={item} key={`orderItem-${item.id}`} />;
        })}
      </div>
      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>${sumPrices()}</p>
      </div>
      <button className="primary-button">Checkout</button>
    </div>
  );
};

export default MyOrder;
