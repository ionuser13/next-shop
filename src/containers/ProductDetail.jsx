import React from 'react';
import ProductInfo from "@components/ProductInfo";
import close from "@icons/icon_close.png";
import "@styles/ProductDetail.scss";

const ProductDetail = () => {
    return (
        <div className="ProductDetail">
            <div className="product-detail-close">
                <img src={close} alt="close" />
            </div>
            <ProductInfo />
        </div>
    )
}

export default ProductDetail