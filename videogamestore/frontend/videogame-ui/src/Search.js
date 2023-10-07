import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Search() {


  return (
    <div class="flex-container">
    <div class="search-info">
    <p1 class="search-info">Search for any game in our catalog by title!</p1>
    </div>

      <form action="#">
        <div class="search-container">
          <label for="#game-name">Title of Game:</label>
          <input
            type="text"
            id="game-name"
            name="name"
          ></input>
          <button id="add-game">Search Game</button>
        </div>
      </form>
    </div>
  );
}
export default Search;
