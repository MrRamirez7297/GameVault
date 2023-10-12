import React from 'react';
import { useCart } from './CartContext';

function Cart() {
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
       <p><button onClick={() => { handleClearCart(); alert('Thanks for your purchase!\n\nHere\'s your download code:\n\nXXXX-XXXX-XXXX'); }}>Checkout</button></p>

    </div>
  );
}


     
export default Cart;
