import React from "react";
import { Button } from "./Button";
import "../components/Hero.css";
import "../App.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src='/bg.jpg/'/>
      <h1>Space to live your life.</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btn">
        <Button className="btns" buttonStyle="btn-outline" buttonSize="btn-lg">
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn-primary" buttonSize="btn-lg">
          HOTEL TOUR <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
