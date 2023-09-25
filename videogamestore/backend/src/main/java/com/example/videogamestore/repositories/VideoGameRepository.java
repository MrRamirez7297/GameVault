package com.example.videogamestore.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.videogamestore.models.VideoGamesModel;

public interface VideoGameRepository extends CrudRepository<VideoGamesModel, Long>{
    
}
