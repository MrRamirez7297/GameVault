package com.example.videogamestore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = "com.example.videogamestore")
@SpringBootApplication
public class VideogamestoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(VideogamestoreApplication.class, args);
	}

}
