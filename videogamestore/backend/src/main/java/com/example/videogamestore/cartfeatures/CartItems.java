package com.example.videogamestore.cartfeatures;

public class CartItems {
    
    private String gameTitle;
    private int quantity;
    private double price;
    
    public CartItems() {
    }

    public CartItems(String gameTitle, int quantity, double price) {
        this.gameTitle = gameTitle;
        this.quantity = quantity;
        this.price = price;
    }

    public String getGameTitle() {
        return gameTitle;
    }

    public void setGameTitle(String gameTitle) {
        this.gameTitle = gameTitle;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    
}