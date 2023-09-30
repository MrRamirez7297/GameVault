import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Home() {
    return (
        <div class="container">
            <div class="container-item1">
                <h1> Welcome to *enter store name here* ! </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="container-item2">
                <img
                    id="banner"
                    src="https://i.stack.imgur.com/YIZTm.jpg"
                    alt="game-collage"
                    height="550px"
                    width="1150px"
                />
            </div>
        </div>
    );
}

export default Home;