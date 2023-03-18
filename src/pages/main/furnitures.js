import React from 'react';
import Header from '@components/Header';
import ProductList from '@containers/ProductList';
const Clothes = () => {
  const API = 'https://api.escuelajs.co/api/v1/categories/3/products';
  return (
    <>
      <Header />
      <ProductList APIParameter={API} />;
    </>
  );
};

export default Clothes;
