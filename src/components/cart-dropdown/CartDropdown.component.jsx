import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import Button from '../button/Button.component';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/CartItem.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/checkout');
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p className="empty-message">Your cart is empty!</p>
        )}
      </div>
      <Button onClick={handleCheckout}>go to checkout </Button>
    </div>
  );
};

export default CartDropdown;
