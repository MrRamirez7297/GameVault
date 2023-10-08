/* eslint-disable no-restricted-globals */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";


function Catalog() {
  const [Catalog, setCatalog] = useState([]);
  
  
  useEffect(() => {
    async function fetchCatalog() {
      try {
        const { data } = await axios.get("http://localhost:8080/all-games");
        setCatalog(data);
      } catch (error) {
        console.error("Error fetching Catalog: ", error);
      }
    }

    fetchCatalog();
  }, []);

  return (
    <div id="game-library-box">
      <div>
        <div>
          <h1>Game Library goes here! </h1>
        </div>

        <ul id="game-items">
          {Catalog.map((game) => (
            <li id="game-items" key={game.id}>
              <div class="game-library-list">
                <div id="game-library-items">
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Catalog;
