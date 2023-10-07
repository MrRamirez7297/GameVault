package com.example.videogamestore.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.videogamestore.models.CartItems;
import com.example.videogamestore.models.Order;
import com.example.videogamestore.repositories.Cart;

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
        order.setItems(new ArrayList<>((List<CartItems>) cart.findAll()));
        order.setTotal(((List<CartItems>) cart.findAll()).stream().mapToDouble(i -> i.getPrice() * i.getQuantity()).sum());
        ((List<CartItems>) cart.findAll()).clear();
        return order;
    }

}