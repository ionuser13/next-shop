import React, { useContext, useState } from 'react';
// import { ProductContext } from '@hooks/productContext';
import AppContext from '@context/AppContext';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';
import ProductInfo from './ProductInfo';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const { addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };
  const filteredImages = product.images.filter((img) => img.startsWith('https://'));
  const firsImg = filteredImages[0];
  const handleInfo = () => setToggleInfo(true);
  const [imgError, setImgError] = useState(false);
  const fallBackSrc = 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';

  return (
    <div className={`${styles['ProductItem']}`}>
      {product.images[0] && (
        <Image
          alt={product.title}
          className={styles['ProductItem-img']}
          width={240}
          height={240}
          onError={() => {
            setImgError(true);
          }}
          src={imgError ? fallBackSrc : firsImg}
          onClick={handleInfo}
        />
      )}
      <div className={styles['product-info']}>
        <div>
          <p className={styles['product-info-div-p-1']}>$ {product.price}</p>
          <p className={styles['product-info-div-p-2']}>{product.title}</p>
        </div>
        <figure className={styles['product-info-figure']}>
          <Image onClick={() => handleClick(product)} src={addToCartIcon} alt="add to cart button" className={styles['product-info-figure-img']} width={35} height={35} />
        </figure>
      </div>
      <ProductInfo product={product} toggleInfo={toggleInfo} setToggleInfo={setToggleInfo} />
    </div>
  );
};

export default ProductItem;
