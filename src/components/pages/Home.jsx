import Hero from "../Hero";
import "../../App.css";
import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";


const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
