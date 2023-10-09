import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useCart } from "./CartContext";;

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const { addToCart } = useCart();

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
    // Check if a game is loaded and add it to the cart
    if (game) {
      addToCart(game); // Assuming addToCart accepts a game object
      // You can provide user feedback here (e.g., a message)
      alert("Game added to cart!");
    }
  };

  return (
    <div>
      {game ? (
        <div>
          <img src={game.imageUrl} alt={game.imageUrl} width="" height="400" />
          {/* Display other game details here */}
          <h2>{game.name}</h2>
          <h4>{game.genre}</h4>
          <h5>Metascore: {game.rating}%</h5>
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
            <button onClick={() => { alert('Thanks for your purchase!\n\nHere\'s your download code:\n\nXXXX-XXXX-XXXX'); }}>Buy Now</button>
            &nbsp;&nbsp;&nbsp;
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
