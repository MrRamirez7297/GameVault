import React, { useState } from 'react';
import { useCart } from './CartContext';


function Cart() {
  const [downloadCode, setDownloadCode] = useState('');
  const { cartItems, removeFromCart, updateQuantity,clearCart } = useCart();


  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  
  const quantityOptions = Array.from({ length: 5 }, (_, i) => (
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ));
  
  const handleClearCart = () => {
  clearCart();
};

const handleCheckout = () => {
  const code = generateRandomCode(); 
  setDownloadCode(code);  
  alert(`Thanks for your purchase!\n\nHere's your download code:\n\n${code}`);
};

const generateRandomCode = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    code += letters[randomIndex];
    if (i === 3 || i === 7) {
      code += '-';
    }
  }
  return code;
};

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
          {item.name} - ${item.price} {" "}
            <select
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
            >
              {quantityOptions}
            </select>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <p><button onClick={handleCheckout}>Checkout</button></p>

    </div>
  );
}


     
export default Cart;
