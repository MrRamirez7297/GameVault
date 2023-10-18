import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Cart() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {

        cartItems.forEach((item) => {
            console.log("Item price:", item.price);
        });

        const validCartItems = cartItems.filter((item) => !isNaN(parseFloat(item.price)));

        const newTotalPrice = validCartItems.reduce((total, item) => {
            const itemPrice = parseFloat(item.price);
            return total + itemPrice * item.quantity;
        }, 0);


        //Debug
        console.log("New total price:", newTotalPrice);

        setTotalPrice(newTotalPrice);
    }, [cartItems]);


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


    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your Cart is Empty</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price}{" "}
                                <select
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, parseInt(e.target.value, 10))
                                    }
                                >
                                    {quantityOptions}
                                </select>
                                <button onClick={() => handleRemoveFromCart(item.id)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    <p>
                        <Link to="/shipping-page" state={{ totalPrice: totalPrice }}>
                            <button>Checkout</button>
                        </Link>
                    </p>
                </>
            )}
        </div>
    );
}

export default Cart;
