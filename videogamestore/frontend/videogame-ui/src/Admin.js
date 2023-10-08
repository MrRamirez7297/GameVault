import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Admin() {
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

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
                    <label for= "#game-price">Price</label>
                    <input
                    type="text"
                        id="game-price"
                        name="price"
                        value={price}
                        onChange={(e) => setImageUrl(e.target.value)}
                    ></input>
                </div>

                <div>
                    <button id="add-game" onClick={addGame}>
                        Add Game
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Admin;
