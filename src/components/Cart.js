import React, { useState, useContext } from 'react'
import { context } from './Context';
import Quantity from './Quantity';

//   This is Cart Component which contains all the items that are added in the Cart.

const Cart = () => {
  const { carts, setCarts, cartNumber, setCartNumber } = useContext(context);

  //  This function removes the item from the cart which user want to remove from the Cart.
  const removeItem = (id) => {
    const newItems = carts.filter((cart) => cart.id !== id)
    setCarts(newItems);
    setCartNumber(newItems.length);
  }

  return (
    <div className='cartDisplay'>
      <div className='smallHeading'>
        <div>Image</div>
        <div>Title</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Action</div>
      </div>
      {
        // This will Display all the added items in the Cart
        carts.map((cart) => (
          <div className='cartSingleItem'>
            <img className='cartSingleImage' src={`${cart.image}`} />
            <div className='CartName'>{cart.title}</div>
            <div>{cart.price} $</div>
            <Quantity cart={cart} />
            <button onClick={() => removeItem(cart.id)} className='button1'>Remove Item</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart