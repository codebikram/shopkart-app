import './checkout.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component';
import ChecoutHeader from '../../components/chekout-header/ChecoutHeader.component';
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <ChecoutHeader title="product" />
        <ChecoutHeader title="description" />
        <ChecoutHeader title="quantity" />
        <ChecoutHeader title="price" />
        <ChecoutHeader title="remove" />
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <div className="total">Total: &#8377;{cartTotal}</div>
    </div>
  );
};

export default Checkout;
