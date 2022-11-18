import React from 'react'
import Heading from './components/Heading';
import ShoppingList from './components/ShoppingList';
import { Link, Routes, Route } from "react-router-dom";
import Product from './components/Product';
import Context from './components/Context';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

      <Context>
        <Home />
      </Context>

    </div>
  );
}

export default App;
