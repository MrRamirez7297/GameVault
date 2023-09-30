package com.example.videogamestore.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.videogamestore.cartfeatures.Cart;
import com.example.videogamestore.cartfeatures.CartItems;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CartController {
    
    private final Cart cart;

    public CartController(Cart cart) {
        this.cart = cart;
    }

    @RequestMapping("/cart")
    public List<CartItems> getCart() {
        return cart.getCartItems();
    }

    @GetMapping
    public List<CartItems> getCartItems() {
        return cart.getCartItems();
    }

    @PostMapping("/addtocart")
    public void addToCart(@RequestBody CartItems game) {
        cart.addToCart(game);
    }

    @DeleteMapping("/removeitem")
    public void removeFromCart(@RequestBody CartItems game) {
        cart.removeFromCart(game);
    }

}
