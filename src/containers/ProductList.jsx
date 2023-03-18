import React, { useState } from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
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
    </section>
  );
};

export default ProductList;
