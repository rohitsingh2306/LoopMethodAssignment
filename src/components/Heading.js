import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { context } from './Context';
import './style.css';

//    This is Header Component which is COMMON in every page of our app.

const Heading = () => {
  const { cartNumber, setCartNumber } = useContext(context);
  return (
    <div className='Navbar'>
      <div className='Heading1'>Shopping List</div>
      <div className='Heading2'>
        <Link to="/" className='Home'>Home </Link>
        <span>About</span>
        <span>Shop</span>
        <span>Donate</span>
        <span>Contact</span>
        <Link to="/cart"> <FontAwesomeIcon className='shoppingCart' icon={faShoppingCart} /><div className='number'>{cartNumber}</div></Link>
      </div>

    </div>

  )
}

export default Heading