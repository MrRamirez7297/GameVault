import axios from "axios";
import "./App.css";

function DeleteGames() {
    const deleteGame = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/delete-game/{id}`);
            alert("Game Deleted!");
        } catch (error) {
            console.error("Error deleting game", error);
        }
    };

    return { deleteGame };
}

export default DeleteGames;
