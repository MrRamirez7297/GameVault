package com.example.videogamestore.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClient.ResponseSpec;

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

    // @GetMapping("/admin/server-game")
    // public ResponseSpec getServerGame() {

    //     List<VideoGamesModel> games = new ArrayList<>();

    //     return webClient.get()
    //             .uri("https://api.rawg.io/api/games?key=${a733837bc3314b4081be494cbb697c13}")
    //             .retrieve();
    //             // .bodyToMono(Map.class)
    //             // .map(gamesData -> {

    //             //     String name = (String) gamesData.get("name");

    //             //     String imageUrl = (String) ((Map) gamesData.get("cover")).get("front_default");

    //             //     String description = (String) gamesData.get("description");

    //             //     Double price = (Double) gamesData.get("price");

    //             //      String genre = (String) gamesData.get("genre");

    //             //      String rating = (String) gamesData.get("rating");

    //             //      games.add(new VideoGamesModel(name, imageUrl, description, price, genre, rating));
    //                 // return webClient.get()
    //                 //         .uri("https://api.rawg.io/api/games?key=${a733837bc3314b4081be494cbb697c13}")
    //                 //         .retrieve()
    //                 //         .bodyToMono(Map.class)
    //                 //         .map(gamesData -> {
    //                 //             String name = (String) gamesData.get("name");

    //                 //             String imageUrl = (String) ((Map) gamesData.get("cover")).get("front_default");

    //                 //             String description = (String) gamesData.get("description");

    //                 //             String price = (String) gamesData.get("price");

    //                 //             String genre = (String) gamesData.get("genre");

    //                 //             String rating = (String) gamesData.get("rating");
    //                 //             return new Game(name, imageUrl, description, price, genre, rating);
    //                 //         });
    //             // });

    //             // return games;
    // }

}
