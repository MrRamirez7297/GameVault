/* eslint-disable no-restricted-globals */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Catalog() {
  const [Catalog, setCatalog] = useState([]);
  const [game, setGame] = useState(null);

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

 

  const addToCart = async () => {
    if (!game) return;
    try {
      await axios.post("http://localhost:8080/addtocart", {
        name: game.name,
        imageUrl: game.imageUrl,
      });
      alert("game added to cart!");
    } catch (error) {
      console.error("Error adding game to cart", error);
    }
  }

  

  return (
    <div class="game-container">
      <h1>Game Library goes here! </h1>
      <div id="game-library-box">
        <ul id="game-items">
          {Catalog.map((game) => (
            <li id="game-items" key={game.id}>
              {" "}
              <div class="game-library-list">
                <div class="game-library-items">
                  <h2 id="game-title">{game.name}</h2>

                  <div id="game-image">
                    <img
                      id="idk"
                      src={game.imageUrl}
                      alt={game.imageUrl}
                      width="300"
                    />
                  </div>
                  <div class="description">
                    <p2 id="game-info">{game.description}</p2>
                  </div>
                  <button onClick={()=> GamePage(game)}>More Info</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
       
        
      </div>

    </div>
  );
}

const GamePage = ({game}) => {
  return (
    <div>
      <div class="img-container">
        <div class="img">
          <img
            id="game-img"
            src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/meta/reveal/jpt-reveal-meta.jpg"
            alt="MW3"
            height="550px"
            width="1150px"
          />
        </div>
      </div>
      <div class="item-title">
        <h1>{game?.name}</h1>
      </div>
      <div class="price">
        {" "}
        <h2>{game?.price}</h2>
      </div>
      <select>
        <option value="Playstation 5">Playstation 5</option>
        <option value="Xbox Series X">Xbox Series X</option>
        <option value="PC">PC</option>
      </select>
      <div class="item-desc">
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div>
        <h3>genre</h3>
        <h3>rating</h3>
      </div>

      <button>Buy Now</button>

    </div>
  );
}
export default Catalog;
