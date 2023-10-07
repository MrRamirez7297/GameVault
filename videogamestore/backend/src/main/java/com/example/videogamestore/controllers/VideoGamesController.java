package com.example.videogamestore.controllers;

import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.videogamestore.models.VideoGamesModel;
import com.example.videogamestore.repositories.VideoGameRepository;

import reactor.core.publisher.Mono;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VideoGamesController {
    
    @Autowired
    private VideoGameRepository videoGameRepository;

    private WebClient webClient = WebClient.create();

    
    @GetMapping("/all-games")
    public List<VideoGamesModel> getAllGames() {
        return (List<VideoGamesModel>) videoGameRepository.findAll();
    }

    @PostMapping("/admin/add-game")
    public void addGame(@RequestBody VideoGamesModel name) {
        videoGameRepository.save(name);
    }

    @DeleteMapping("/delete-game/{id}")
    public void deleteGame(@PathVariable Long id) {
        videoGameRepository.deleteById(id);
    }

    

}
