import React from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/Button.component';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>go to checkout </Button>
    </div>
  );
};

export default CartDropdown;