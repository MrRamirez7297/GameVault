import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const [wallet, setWallet] = useState(0);

  const clearCart = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    if (wallet < total) {
      alert('Insufficient funds, please load wallet');
      return;
    }
  
    setWallet(wallet - total);
    setCartItems([]);
    alert('Thanks for your purchase!\n\nHere\'s your download code:\n\nXXXX-XXXX-XXXX');
  };

  // const [wallet, setWallet] = useState(0);

  // const clearCart = () => {
  //   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  //   if (wallet < total) {
  //     alert('Insufficient funds, please load wallet');
  //     return;
  //   }
  
  //   setWallet(wallet - total);
  //   setCartItems([]);
  //   alert('Thanks for your purchase!\n\nHere\'s your download code:\n\nXXXX-XXXX-XXXX');
  // };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // const clearCart = () => {
  //   setCartItems([]);
  // };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,  
        decreaseQuantity, 
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
