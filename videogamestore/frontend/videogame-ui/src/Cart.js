import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';


function Cart() {
    return (


        <div class="cart-container">
            <h1>Your Cart</h1>
            <div id="cart"> <img
                id="banner"
                src="https://images.vexels.com/media/users/3/128010/isolated/preview/3d16fdf3b9dde0c021f67bf5ae1d4cc4-hand-drawn-shopping-cart.png"
                alt="game-collage"
                height="200px"
                width="200px"
            /></div>
        </div>
    );
}
export default Cart;
