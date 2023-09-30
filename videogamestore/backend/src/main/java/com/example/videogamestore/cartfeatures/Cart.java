package com.example.videogamestore.cartfeatures;

import java.util.ArrayList;
import java.util.List;

public class Cart {
    
    private List<CartItems> cartItems = new ArrayList<>();

    public void addToCart(CartItems game) {
        this.cartItems.add(game);
    }

    public void removeFromCart(CartItems item) {
        this.cartItems.remove(item);
    }

    public Cart(List<CartItems> cartItems) {
        this.cartItems = cartItems;
    }

    public List<CartItems> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItems> cartItems) {
        this.cartItems = cartItems;
    }
    
}

