import axios from "axios";
import "./App.css";


var addItemId = 0
function addToCart(game) {

    const item = { id: game.id, gameTitle: game.title, quantity: 1, price: game.price };

    axios.post('/addtocart', game.id)
        .then(response => console.log(response))
        .catch(error => console.error(error));

        addItemId += 1;

        var selectedItem = document.createElement()
        selectedItem.setAttribute(`id`, addItemId);
        var price = document.createElement(`price`);
        var cartItems = document.getElementsById(`name`);
        name.innerText = game.player[1].innerText;
        selectedItem.append(name);
        selectedItem.append(price);
        cartItems.append(selectedItem);
    
        var delBtn = document.createElement(`button`);
        delBtn.innerText = `Delete`;
        delBtn.setAttribute(`onclick`, `del(`+addItemId`)`);
        selectedItem.append(delBtn)
}
        
        function del(game){
            document.getElementsById(game).remove();
        }
    
    