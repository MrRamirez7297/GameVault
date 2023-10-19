import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import { Link } from "react-router-dom";

function Search() {
  const [title, setTitle] = useState(''); 
  const [game, setGame] = useState(null);

  
  const gameTitleToIdMap = {
    "The Legend of Zelda: Tears of the Kingdom": 1,
    "Zelda": 1,
    "zelda": 1,

    "Starfield": 2,
    "starfield": 2,

    "Diablo IV": 3,
    "Diablo":3,

    "Baldur's Gate III": 4,
    "Baldur's 3": 4,
    "Baldur": 4,

    "Dead Island 2": 5,
    "Dead Island": 5,
    "dead island 2": 5,
    "dead island": 5,


    "Atomic Heart": 6,
    "Star Wars Jedi: Survivor": 7,
    "Barotrauma": 8,

    "Final Fantasy XVI": 9,
    "Final Fantasy": 9,
    "final fantasy": 9,

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
    "Call of Duty: Modern Warfare 2": 31,
    "Bioshock Infinite": 32,

    "Half-Life": 33,
    "Borderlands": 34,
    "Cyberpunk 2077":35,
    "Horizon Zero Dawn": 36,
    "TEKKEN 7": 37,
    "NBA 2K20": 38,
    "Tony Hawk's Pro Skater 1 + 2": 39,
    "The Elder Scrolls V: Skyrim": 40,
    "Tomb Raider (2013)": 41,
    "DOOM (2016)": 42,
    "Batman: Arkham Knight": 43,
    "The Sims 4: Digital Deluxe Edition": 44,
    "Sid Meier's Civilization V": 45,
    "Stardew Valley": 46,
    "NieR: Automata": 47,
    "Portal 2": 48,
    "Mario Kart 8 Deluxe": 49,
    "Super Smash Bros Ultimate": 50,

    
    
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
