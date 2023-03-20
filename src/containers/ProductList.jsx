import React, { useState, useContext } from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import { ProductContext } from '@hooks/productContext';
import ProductInfo from '@components/ProductInfo';
import styles from '@styles/productList.module.scss';

const ProductList = ({ APIParameter, numProd = 30 }) => {
  const [numProducts, setNumProducts] = useState(numProd);

  function loadMore() {
    setNumProducts(numProducts + 30);
  }

  const products = useGetProducts(`${APIParameter}?offset=0&limit=${numProducts}`);
  return (
    <section className="main-container">
      <div className={styles['ProductList']}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
      <button className={`${styles['primary-button']} ${styles['load']}`} onClick={loadMore}>
        Load more products
      </button>
      {/* <ProductInfo /> */}
    </section>
  );
};

export default ProductList;
