import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function Search() {
return (

    <div class="flex-container">
      <form action="#">
     

      <div class="search-container">
      <label for="#game-name">Title of Game:</label>
      <input  type="text" id="game-name" name="name" value={name} onChange={e => setName(e.target.value)}></input>
      </div>

      <div>
        <button id="add-game" onClick={searchGame}>Search Game</button>
      </div>
       
    </form>
  </div>
    
    
  );
}
export default Search;
