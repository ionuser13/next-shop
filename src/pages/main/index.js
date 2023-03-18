import React from 'react';
import Header from '@components/Header';
import ProductList from '@containers/ProductList';
const Home = () => {
  const API = `https://api.escuelajs.co/api/v1/products`;
  return (
    <>
      <Header />
      <ProductList APIParameter={API} />;
    </>
  );
};

export default Home;
