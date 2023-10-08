import axios from "axios";
import "./App.css";

function addToCart(game) {

    const item = { id: game.id, gameTitle: game.title, quantity: 1, price: game.price };

    axios.post('/addtocart', game.id)
        .then(response => console.log(response))
        .catch(error => console.error(error));

return {addToCart};
}

export default AddToCart;