import React from 'react';
import classes from './Carauser.module.css';
import { Carousel } from 'react-responsive-carousel';
import {img} from './img/Data'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function CarauserEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
				{img.map((imglink)=>{
					return<img src={imglink}></img>
				})}
			</Carousel>
			<div className={classes.hero__img}></div>
    </div>
  );
}

export default CarauserEffect;
