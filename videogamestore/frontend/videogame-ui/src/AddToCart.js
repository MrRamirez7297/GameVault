import axios from 'axios';

function addToCart(game) {
    const item = { id: game.id, gameTitle: game.title, quantity: 1, price: game.price };

    axios.post('/addtocart', item)
        .then(response => console.log(response))
        .catch(error => console.error(error));
}