import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Home() {
  return (
    <div >
      <div >
        <img class="home-img"
          id="banner"
          src="https://i.stack.imgur.com/YIZTm.jpg"
          alt="game-collage"
          height="600px"
          width="1500px"
        />
      </div>
    </div>
  );
}

export default Home;
