import React from 'react';
import Layout from '../../components/Layout/Layout';
import CarauserEffect from '../../components/Carauser/Carauser';
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';
function Landing() {
  return (
    <Layout>
      <CarauserEffect />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
