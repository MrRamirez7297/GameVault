import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalog from "./Catalog";


function Admin() {
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [price, setPrice] = useState(null);
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


    const addGame = async () => {
        try {
            await axios.post("http://localhost:8080/admin/add-game", {
                name: name,
                description: description,
                imageUrl: imageUrl,
            });
            alert("Game Added!");
        } catch (error) {
            console.error("Error adding game", error);
        }
    };

    const deleteGame = async () => {
        try {
            await axios.delete(`http://localhost:8080/delete-game/{id}`);
            alert("Game Deleted!");
        } catch (error) {
            console.error("Error deleting game", error);
        }
    };
    return (
        <div class="flex-container">
            <div> </div>
            <form action="#">
                <div class="input">
                    <label for="#game-name">Title of Game:</label>
                    <input
                        type="text"
                        id="game-name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <label for="#description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></input>
                    <label for="#game-image">Image Url:</label>
                    <input
                        type="text"
                        id="image-url"
                        name="image"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    ></input>
                    <label for="#game-price">Price</label>
                    <input
                        type="text"
                        id="game-price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    ></input>
                </div>

                <div>
                    <button id="add-game" onClick={addGame}>
                        Add Game
                    </button>
                </div>
            </form>

            <div >
                <ul className="game_container">
                    {Catalog.map((game) => (
                        <li key={game.id}>
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
                                <button id="delete" onClick={() => deleteGame(game.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Admin;
