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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

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

    @GetMapping("/admin/server-game")
    public Mono<VideoGamesModel> getServerGame() {
        return webClient.get()
                .uri("https://api.rawg.io/api/games?key=6bacc44869e64a04b31bbfeef32a76f5")
                .retrieve()
                .bodyToMono(Map.class)
                .flatMap(data -> {
                    int count = (int) data.get("count");
                    int randomId = new Random().nextInt(count + 1);
                    return webClient.get()
                            .uri("https://api.rawg.io/api/games/" + randomId + "?key=6bacc44869e64a04b31bbfeef32a76f5")
                            .retrieve()
                            .bodyToMono(Map.class)
                            .map(randomData -> {
                                String name = (String) randomData.get("name");
                                String imageUrl = (String) randomData.get("background_image");
                                Double rating = (Double) randomData.get("rating");
                                return new VideoGamesModel(name, imageUrl, "Nothing", 69.99, "genre", rating);
                            });
                });
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

    // @GetMapping("/game/{name}")
    // public List<VideoGamesModel> searchGames(@RequestParam String name) {
    //     return videoGameRepository.findByTitleContaining(name);
    // }

    // @GetMapping("/game/search/{name}")
    // public ResponseEntity<List<VideoGamesModel>> getGameByTitle(@PathVariable
    // String name) {
    // List<VideoGamesModel> game =
    // videoGameRepository.findByTitleContainingIgnoreCase(name);

    // if (!game.isEmpty()) {
    // return ResponseEntity.ok(game);
    // } else {
    // return ResponseEntity.notFound().build();
    // }
    // }

}
