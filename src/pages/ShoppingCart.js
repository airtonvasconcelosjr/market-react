import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ cart }) => {
  const [updatedCart, setUpdatedCart] = useState(cart);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = updatedCart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setUpdatedCart(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    updatedCart.forEach((item) => {
      totalPrice += item.prices[0].promo_price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <div>
      <Link to="/">Voltar</Link>
      <h1>Shopping Cart</h1>
      {updatedCart.length > 0 ? (
        <div>
          {updatedCart.map((item) => (
            <div key={item.id}>
              <img src={'https://assets.instabuy.com.br/ib.item.image.small/s-' + item.images[0]} alt={item.name} />
              <p>{item.name}</p>
              <p>
                Quantity:{' '}
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
              </p>
              <p>Total Price: {item.prices[0].promo_price * item.quantity}</p>
            </div>
          ))}
          <p>Total Cart Price: {calculateTotalPrice()}</p>
        </div>
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
