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
    "Barotrauma": 8,
    "Final Fantasy XVI": 9,
    "Assassin's Creed Mirage": 10,
    "The Witcher 3: Wild Hunt": 11,
    "God of War (2018)": 12,
    "The Last Of Us":13,
    "Uncharted 4: A Thief’s End": 14,
    "Portal": 15,
    "Max Payne": 16,
    "Grand Theft Auto V": 17,
    "Super Mario Odyssey": 18,
    "Super Mario 64": 19,
    "Disco Elysium": 20,
    "Stray": 21,
    "Elden Ring": 22,
    "Teenage Mutant Ninja Turtles: Shredder's Revenge": 23,
    "It Takes Two": 24,
    "The Legend of Zelda: Breath of the Wild": 25,
    "Marvel's Spider-Man": 26,
    "Fallout: New Vegas": 27,
    "Red Dead Redemption": 28,
    "Red Dead Redemption 2": 29,
    "Star Wars: Knights of the Old Republic": 30,
    
    
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
