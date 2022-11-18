import React from 'react'
import Heading from './Heading';
import ShoppingList from './ShoppingList';
import { Link, Routes, Route } from "react-router-dom";
import Product from './Product';
import Cart from './Cart';

// This Component is our navigation page to navigate to different routers with help of react-router.

const Home = () => {
  return (
    <div className='article'>


      <Routes>

        <Route path="/" element={<ShoppingList />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path="/:productId" element={<Product />}></Route>

      </Routes>
    </div>
  )
}

export default Home