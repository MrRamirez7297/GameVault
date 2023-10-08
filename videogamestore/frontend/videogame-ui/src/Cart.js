import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';


function Cart() {
    const [gameCollection, setGameCollection] = useState([]);

    useEffect(() => {
        async function fetchCollection() {
            try {
                const { data } = await axios.get('http://localhost:8080/cart');
                setGameCollection(data);
            }
            catch (error) {
                console.error('Error fetching collection: ', error);
            }
        }

        fetchCollection();
    }, []);








    return (


        <div class="cart-container">
            <h1>Your Cart</h1>
            <ul>
                {gameCollection.map( game => (
                    <li key={game.id}>{game.name} <div>{game.image}</div></li>
                ))}
            </ul>
        </div>
    );
}
export default Cart;
