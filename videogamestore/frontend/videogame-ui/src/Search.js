import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

function Search() {


  return (
    <div class="page-container">

      <form action="#">
        <div class="search-container">
          <label for="#game-name">Title of Game:</label>
         
<input type="text" name="search" placeholder="Search.."></input>
          <button className="button" id="add-game">Search Game</button>
        </div>
      </form>
    </div>
  );
}
export default Search;

