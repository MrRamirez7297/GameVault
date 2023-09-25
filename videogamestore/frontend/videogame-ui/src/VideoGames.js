import React, { useState, useEffect } from "react";
import axios from 'axios';

function VideoGames() {
    const [game, setVideoGames] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchVideoGames = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/admin/server-game');
            setVideoGames(response.data);
        }
        catch (error) {
            console.error('Error fetching video games:', error);
        }
        finally {
            setLoading(false);
        }
    }

    const addGame = async () => {
        if (!game) return;
        try {
            await axios.post('http://localhost:8080/admin/add-game', { name: game.name, imageUrl: game.imageUrl });
            alert('Game Added!')
        }
        catch (error) {
            console.error('Error adding the game', error);
        }
    }

    useEffect(() => {
        fetchVideoGames();
    }, []);

    return (
        <div>
            {loading 
                ? ( <p>Loading...</p>)
                : (
                    <div>
                        <img src={game.imageUrl} alt={game.name} />
                        <button onClick={addGame}>Add Game</button>
                    </div>
                )
            }
        </div>
    )

}

export default VideoGames
