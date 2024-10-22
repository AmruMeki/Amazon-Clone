import React from 'react';
import classes from './Category.module.css';

import { catagoryinfos } from './CategoryFullInfo';
import CategoryCard from './CategoryCard';
function Category() {
  return (
    <section className={classes.category__container}>
      {catagoryinfos.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
}

export default Category;
