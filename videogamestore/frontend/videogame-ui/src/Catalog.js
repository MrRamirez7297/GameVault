import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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
                <div class="games">1</div>
                <div class="games">2</div>
                <div class="games">3</div>
                <div class="games">4</div>
            </div>
        </div>
    );
}
export default Catalog;