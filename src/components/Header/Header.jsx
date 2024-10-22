import React from 'react';
import classes from './Header.module.css';
import amazonimg from '../../assets/amazon.png';
import usaimg from '../../assets/usa.jpg';
import { FaSearch } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';

<FaSearch />;

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            {/* logo */}
            <Link to='/'>
              <img src={amazonimg} alt="amazon logo" />
            </Link>

            <div className={classes.delivery}>
              <div>
                <FaLocationDot />
              </div>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search products" />
            <FaSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img src={usaimg} alt="" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            {/* three components */}
            <Link to='/auth'>
              <div>
                <p>Sign In</p>
                <span>Accounts & Lists</span>
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <FaShoppingCart size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
