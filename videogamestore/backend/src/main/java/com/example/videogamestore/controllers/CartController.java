package com.example.videogamestore.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import com.example.videogamestore.models.CartItems;
import com.example.videogamestore.repositories.Cart;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cart")
public class CartController {

    private final Cart cart;

    
    public CartController(Cart cart) {
        this.cart = cart;
    }

    @GetMapping
    public List<CartItems> getCartItems() {
        return (List<CartItems>) cart.findAll();
    }

    @PostMapping("/addtocart")
    public void addToCart(@RequestBody CartItems game) {
        cart.save(game);
    }

    @DeleteMapping("/removeitem/{id}")
    public void removeFromCart(@PathVariable Long id) {
        cart.deleteById(id);
    }
}
