import React, { useEffect, useState } from 'react';
import classes from './Product.module.css';

import axios from 'axios';
import ProductCard from './ProductCard';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log('Fetched products:', res.data); 
        setProducts(res.data);
      })
      .catch((err) => {
        console.log('Error fetching products:', err);
      });
  }, []);

  return (
    <section className={classes.products__container}>
      {products.length > 0 ? (
        products.map((singleProduct) => {
          return <ProductCard product={singleProduct} key={singleProduct.id} />;
        })
      ) : (
        <p>Loading products...</p>
      )}
    </section>
  );
}

export default Product;
