import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  cartTotal: 0,
});
const addCart = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeItem = (cartItems, removeProduct) => {
  const existingItem = cartItems.find((item) => item.id === removeProduct.id);
  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== removeProduct.id);
  }
  return cartItems.map((item) =>
    item.id === removeProduct.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItem = (cartItems, id) => {
  return cartItems.filter((i) => i.id !== id);
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, item) => {
      return (total = total + item.quantity);
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce((total, item) => {
      return (total = total + item.quantity * item.price);
    }, 0);
    setCartTotal(newTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCart(cartItems, productToAdd));
  };
  const removeItemFromCart = (cartItem) => {
    setCartItems(removeItem(cartItems, cartItem));
  };
  const clearCartHandler = (id) => {
    setCartItems(clearCartItem(cartItems, id));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearCartHandler,
    cartItems,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
