import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import ShoppingCart from './pages/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is in the cart, increase its quantity by 1
      const updatedCart = cart.map((item) =>
        item.id === existingProduct.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/product/:slug" component={ProductDetails} />
        <Route path="/categories" component={Categories} />
        <Route path="/cart" element={<ShoppingCart cart={cart} />} />
        {/* 
          Define other routes for the remaining pages (e.g., ProductDetails, Categories) 
          using the same format as the above line
        */}
      </Routes>
    </Router>
  );
};

export default App;
