import React from 'react';
import { useCart } from './CartContext';

function Cart() {
    const { cartItems, removeFromCart } = useCart();

    // Calculate the total price of items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
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
            <p>{cartItems.map((item) => (
                    <p key={item.id}>
                        <button onClick={() => { handleRemoveFromCart(item.id); alert('Thanks for your purchase!\n\nHere\'s your download code:\n\nXXXX-XXXX-XXXX'); }}>Checkout</button></p>))}</p>
        </div>
    );
}

export default Cart;
