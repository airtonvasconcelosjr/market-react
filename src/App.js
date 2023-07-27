import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import ShoppingCart from './pages/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/product/:slug" component={ProductDetails} />
        <Route path="/categories" component={Categories} />
        <Route path="/cart" component={ShoppingCart} />
        {/* 
          Define other routes for the remaining pages (e.g., ProductDetails, Categories, ShoppingCart) 
          using the same format as the above line
        */}
      </Routes>
    </Router>
  );
};

export default App;
