import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const validCartItems = cartItems.filter(
      (item) => !isNaN(parseFloat(item.price))
    );

    const newTotalPrice = validCartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      console.log("Item Price: ", itemPrice);
    console.log("Item Quantity: ", item.quantity);
      return total + itemPrice * item.quantity;
    }, 0);

    console.log("New Total Price: ", newTotalPrice);

    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const quantityOptions = Array.from({ length: 5 }, (_, i) => (
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ));

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };



  return (
    <div className="container">
      <h2 className="title-c">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p className="title-c">Your Cart is Empty</p>
          <Link to="/all-games" className="back">
            Explore Our Catalog
          </Link>
        </div>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li className="list" key={item.id}>
                {item.name} - ${(item.price * item.quantity).toFixed(2)}
                <select
                  className="select"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                >
                  {quantityOptions}
                </select>
                <button className="button1" onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="price">
            Total Price: {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(totalPrice)}
          </p>
          <p>
            <Link to="/shipping-page" state={{ totalPrice: totalPrice }}>
              <button className="button1">Checkout</button>
            </Link>
          </p>
        </>
      )}
    </div>
  );
}

export default Cart;
