import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Admin from "./Admin";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "https://assets-prd.ignimgs.com/2022/12/22/biggestgames2023-blogroll-1671736997619.jpg",
    "https://cdn.vox-cdn.com/thumbor/6I-IQtvx29OSQp0nZscVi7Ev9rA=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68510166/jbareham_201201_ecl1050_goty_2020_top_50_02.0.jpg",
    "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/16:9/w_2560%2Cc_limit/100-best-games-hp-b.jpg",
  ];
  useEffect(() => {
    // Automatically advance to the next slide every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);
  return (
    <div >
      <div >
        <img class="home-img"
          id="banner"

          src={images[currentSlide]}
          alt={`Slide ${currentSlide}`}
          height="600px"
          width="1500px"
        />
      </div>

    </div>
  );
}

export default Home;
