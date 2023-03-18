import React, { useState } from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/productList.module.scss';

const API = `https://api.escuelajs.co/api/v1/products`;

const ProductList = () => {
  const [numProducts, setNumProducts] = useState(10);

  function loadMore() {
    setNumProducts(numProducts + 10);
  }

  const products = useGetProducts(`${API}?offset=0&limit=${numProducts}`);
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
