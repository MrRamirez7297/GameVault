/* eslint-disable no-restricted-globals */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Catalog.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    <div class="page-container">
      <h1 class="catalog-text">Catalog Games </h1>
      <div >
        <ul className="game_container">
          {Catalog.map((game) => (
            <li  key={game.id}>
              <div className="game-items">
                <h2 id="game-title">
                  {game.name}

                  <img
                    className="game-img"
                    src={game.imageUrl}
                    alt={game.imageUrl}
                  />
                </h2>
                <Link to={`/game/${game.id}`}>
                  <button className="info_button">More Info</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Catalog;
