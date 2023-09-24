package com.example.videogamestore.models;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "T_VideoGames")
public class VideoGameModel {
    

    @Id
    @GeneratedValue
    private Long id;

    protected VideoGameModel() {
    }
}
