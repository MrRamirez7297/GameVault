import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";;

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const { addToCart,cartItems } = useCart();
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
    if (game) {
      addToCart(game);
      alert("Game added to cart!");
    }
  };

  const buyNowHandler = () => {
    if (game) {
      addToCart(game);
      const totalPrice = calculateTotalPrice([...cartItems, game]); 
      navigate("/shipping-page", { state: { totalPrice: totalPrice } });
    }
  };

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = parseInt(item.quantity, 10);
  
      if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
        total += itemPrice * itemQuantity;
      }
  
      return total;
    }, 0);
  };


  return (
    <div>
      {game ? (
        <div>
          <img src={game.imageUrl} alt={game.imageUrl} width="" height="400" />
          <h2>{game.name}</h2>
          <h4>{game.genre}</h4>
          <h5>{game.rating}%</h5>
          <h3>${game.price}</h3>
          <select>
            <option value="Playstation 5">Playstation 5</option>
            <option value="Playstation 5">Playstation 4</option>
            <option value="Xbox Series X">Xbox Series X</option>
            <option value="PC">PC</option>
            <option value="Nintendo">Nintendo</option>
          </select>
          <p>{game.description}</p>

          <div class="game-detail-buttons">

        
            <button onClick={buyNowHandler}>Buy Now</button>
          
            
            <button onClick={addToCartHandler}>Add to cart</button>
          </div>

          <Link to="/all-games">Back to Catalog</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GameDetails;
