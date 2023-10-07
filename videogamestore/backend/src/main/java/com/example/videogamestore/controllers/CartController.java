package com.example.videogamestore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.videogamestore.models.CartItems;
import com.example.videogamestore.repositories.Cart;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CartController {
    
    @Autowired
    private Cart cart;

    // public CartController(Cart cart) {
    //     this.cart = cart;
    // }

    @RequestMapping("/cart")
    public List<CartItems> getCart() {
        return (List<CartItems>) cart.findAll();
    }

    @GetMapping
    public List<CartItems> getCartItems() {
        return (List<CartItems>) cart.findAll();
    }

    @PostMapping("/addtocart")
    public void addToCart(@RequestBody CartItems game) {
        cart.save(game);
    }

    @DeleteMapping("/removeitem")
    public void removeFromCart(@PathVariable Long id) {
        cart.deleteById(id);
    }

    

}
