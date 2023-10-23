import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link,useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./GameDetails.css";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();
  

  useEffect(() => {
    async function fetchGameDetails() {
      try {
        const { data } = await axios.get(`http://localhost:8080/game/${id}`);
        setGame(data);
      } catch (error) {
        console.error("Error fetching Game Details: ", error);
      }
    }

    fetchGameDetails();
  }, [id]);

  const addToCartHandler = () => {
    const existingItem = cartItems.find((item) => item.id === game.id);
    if (existingItem) {
      if (existingItem.quantity !== undefined) {
        const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
        addToCart(updatedItem);
        alert("Game added to cart!");
      }
    } else {
      const newItem = { ...game, quantity: 1 };
      addToCart(newItem);
      alert("Game added to cart!");
    }
  };
  
  


const calculateTotalPrice = (cartItems) => {
    const totalPrice = cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = parseInt(item.quantity, 10);
  
      if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
        total += itemPrice * itemQuantity;
      }
      console.log("Item Price:", itemPrice);
      console.log("Item Quantity:", itemQuantity);
      console.log("Running Total:", total);
      return total;
    }, 0);
    console.log("Total Price calculated in calculateTotalPrice: ", totalPrice);
    return totalPrice;
  };
  


  const buyNowHandler = () => {
    if (game) {
      let updatedCartItems = [...cartItems];
      const existingItemIndex = updatedCartItems.findIndex((item) => item.id === game.id);
  
      if (existingItemIndex !== -1) {
        updatedCartItems[existingItemIndex].quantity += 1;
      } else {
        // Make sure the price is a valid number using parseFloat
        const newItem = { ...game, quantity: 1, price: parseFloat(game.price) };
        updatedCartItems.push(newItem);
      }
  
      // Update the cartItems state
      addToCart(updatedCartItems);
  
      // Calculate the updated total price
      const updatedTotalPrice = calculateTotalPrice(updatedCartItems);
      navigate("/shipping-page", { state: { totalPrice: updatedTotalPrice } });
    }
  };
  
  

 

  
  

  
  

  return (
    <div>
    <br></br>
      {game ? (
        <div className="page-container">
        <div class='img-box'>
          <img
            className="game-image"
            src={game.imageUrl}
            alt={game.imageUrl}
            width=""
            height="400"
          />
          </div>
          <h2 className="game-des">{game.name}</h2>
          <h4 className="game-des1">{game.genre}</h4>
          <h5 className="game-des1">Metascore: {game.rating}%</h5>
          <h3 className="game-des1">${game.price}</h3>
          <select className="options">
            <option value="Playstation 5">Playstation 5</option>
            <option value="Playstation 5">Playstation 4</option>
            <option value="Xbox Series X">Xbox Series X</option>
            <option value="PC">PC</option>
            <option value="Nintendo">Nintendo</option>
          </select>
          <p className="game-des">{game.description}</p>

          <div>

          
            <button class="game-detail-buttons" onClick={buyNowHandler}>
              Buy Now
            </button>
          
            

            <button class="game-detail-buttons" onClick={addToCartHandler}>
              Add to cart
            </button>
          </div>
          <br></br>

          <Link className="option1" to="/all-games">
            Back to Catalog
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GameDetails;
