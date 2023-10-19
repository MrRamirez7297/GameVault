import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import { Link } from "react-router-dom";

function Search() {
  const [title, setTitle] = useState(''); 
  const [game, setGame] = useState(null);

  
  const gameTitleToIdMap = {
    "The Legend of Zelda: Tears of the Kingdom": 1,
    "Starfield": 2,
    "Diablo IV": 3,
    "Baldur's Gate III": 4,
    "Dead Island 2": 5,
    "Atomic Heart": 6,
    "Star Wars Jedi: Survivor": 7,
    "Barotrauma":8,
    "Final Fantasy XVI":9,
    "Assassin's Creed Mirage": 10,
    
  };

  const searchGame = async () => {
    if (gameTitleToIdMap.hasOwnProperty(title)) {
      const gameId = gameTitleToIdMap[title];

      try {
        const response = await axios.get(`http://localhost:8080/game/${gameId}`);
        setGame(response.data);
      } catch (error) {
        console.error('Game not found:', error);
        setGame(null);
      }
    } else {
      console.error('Title not found in mapping');
      setGame(null);
    }
  };

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button className="button" onClick={searchGame}>
        Search
      </button>
      {game && (
        <div>
          <h2 id="game-title">{game.name}</h2>
          <img id="idk" src={game.imageUrl} alt={game.imageUrl} width="300" />
          <div class="description">
            <p2 id="game-info">{game.description}</p2>
          </div>
          <Link to={`/game/${game.id}`}>
            <button className="button">More Info</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Search;
