import React, { useState } from 'react';
import { useCart } from './CartContext';

function Cart({ wallet, setWallet }) {

    const { cartItems, removeFromCart, clearCart } = useCart();

    // Calculate the total price of items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
    };

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p><button onClick={() => { handleClearCart(); }}>Checkout</button></p>
        </div>
    );
    
    
}

export default Cart;
