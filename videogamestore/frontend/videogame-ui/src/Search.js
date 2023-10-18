import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom"

function Search() {

  const [id, setId] = useState('');
  const [game, setGame] = useState(null);

  const searchGame = async () => {
      try {
          const response = await axios.get(`http://localhost:8080/game/${id}`);
          setGame(response.data);
      } catch (error) {
          console.error('Game not found:', error);
          setGame(null);
      }
  };

  return (
      <div>
          <input type="text" value={id} onChange={e => setId(e.target.value)} />
          <button onClick={searchGame}>Search</button>
          {game && (
              <div>
              <h2 id="game-title">{game.name}</h2>

<img
  id="idk"
  src={game.imageUrl}
  alt={game.imageUrl}
  width="300"
/>

<div class="description">
  <p2 id="game-info">{game.description}</p2>
</div>

<Link to={`/game/${game.id}`}>
  <button>More Info</button>
</Link>
              </div>
          )}
      </div>
  );
  // return (
  //   <div class="flex-container">
  //   <div class="search-info">
  //   <p1 class="search-info">Search for any game in our catalog by title!</p1>
  //   </div>

  //     <form action="#">
  //       <div class="search-container">
  //         <label for="#game-name">Title of Game:</label>
  //         <input
  //           type="text"
  //           id="game-name"
  //           name="name"
  //         ></input>
  //         <button id="add-game">Search Game</button>
  //       </div>
  //     </form>
  //   </div>
  // );
}
export default Search;
