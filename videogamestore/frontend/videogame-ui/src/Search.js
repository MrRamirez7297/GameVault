import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
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
          <button className="button"onClick={searchGame}>Search</button>
          {game && (
              <div >
              <h2 id="game-title">{game.name}
</h2>

<img className="game-img"
  src={game.imageUrl}
  alt={game.imageUrl}
/>

<Link to={`/game/${game.id}`}>
  <button  className="info_button">More Info</button>
</Link>
              </div>
          )}
      </div>
  );
}
export default Search;

