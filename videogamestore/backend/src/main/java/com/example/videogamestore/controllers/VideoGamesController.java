package com.example.videogamestore.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.videogamestore.models.VideoGamesModel;
import com.example.videogamestore.repositories.VideoGameRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VideoGamesController {
    
    @Autowired
    private VideoGameRepository videoGameRepository;


    
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

    

    @GetMapping("/game/{id}")
public ResponseEntity<VideoGamesModel> getGameById(@PathVariable Long id) {
    Optional<VideoGamesModel> gameOptional = videoGameRepository.findById(id);

    if (gameOptional.isPresent()) {
        VideoGamesModel game = gameOptional.get();
        return ResponseEntity.ok(game);
    } else {
        return ResponseEntity.notFound().build();
    }
}

}
