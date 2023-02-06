import React from 'react';
import "@styles/productInfo.scss";
import close from "@icons/icon_close.png";
import addToCart from "@icons/bt_add_to_cart.svg";

const ProductInfo = () => {
    return (
      <aside className="product-detail">
        <div className="product-detail-close">
          <img src={close} alt="close" />
        </div>
        <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="bike"
        />
        <div className="ProductInfo">
          <p>$35,00</p>
          <p>Bike</p>
          <p>
            With its practical position, this bike also fulfills a decorative
            function, add your hall or workspace.
          </p>
          <button className="primary-button add-to-cart-button">
            <img src={addToCart} alt="add to cart" />
            Add to cart
          </button>
        </div>
      </aside>
    );
}
 {/*Product Info*/}
export default ProductInfo