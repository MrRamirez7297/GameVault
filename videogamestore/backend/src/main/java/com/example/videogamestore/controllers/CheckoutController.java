package com.example.videogamestore.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.videogamestore.cartfeatures.Cart;
import com.example.videogamestore.cartfeatures.Order;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CheckoutController {
    
    private final Cart cart;

    public CheckoutController(Cart cart) {
        this.cart = cart;
    }

    @PostMapping
    public Order checkout() {
        Order order = new Order();
        order.setItems(new ArrayList<>(cart.getCartItems()));
        order.setTotal(cart.getCartItems().stream().mapToDouble(i -> i.getPrice() * i.getQuantity()).sum());
        cart.getCartItems().clear();
        return order;
    }

}