import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="quantity">
          {quantity} x &#8377;{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
