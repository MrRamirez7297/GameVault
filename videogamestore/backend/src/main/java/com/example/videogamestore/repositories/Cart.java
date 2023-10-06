package com.example.videogamestore.repositories;

import org.springframework.data.repository.CrudRepository;
import com.example.videogamestore.models.CartItems;

public interface Cart extends CrudRepository<CartItems, Long>{
    
}

