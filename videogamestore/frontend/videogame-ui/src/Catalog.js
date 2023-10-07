/* eslint-disable no-restricted-globals */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GamePage from "./GamePage";
import { Link, Route, Router, Routes } from "react-router-dom";

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
  }, [Catalog]);

  return (
    <div class="game-container">
      <h1>Game Library goes here! </h1>
      <div id="game-library-box">
        <ul id="game-items">
          {Catalog.map((game) => (
            <li id="game-items" key={game.id}>
              {" "}
              <div class="game-library-list">
                <div class="game-library-items" onClick={() => GamePage()}>
                  <h2 id="game-title">{game.name}</h2>

                  <div id="game-image">
                    <img
                      id="idk"
                      src={game.imageUrl}
                      alt={game.imageUrl}
                      width="300"
                    />
                  </div>
                  <div>
                    <p2 id="game-info">{game.description}</p2>
                  </div>
                  
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link to='/game-page'>More Info.</Link>
      </div>

    </div>
  );
}
export default Catalog;
