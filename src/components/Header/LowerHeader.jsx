import React from 'react';
import { IoMenu } from 'react-icons/io5';
import classes from './Header.module.css';

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <IoMenu />
          <p>All</p>
        </li>
        <li>Today's Deal</li>
        <li>Customor Service</li>
        <li>Registry</li>
        <li>Gift Card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
