import React from "react";
import CardItem from "./CardItem";
import "../components/Cards.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <h1>Check out this LUXURY Hotel!</h1>
        <div className="cards__container">
          <div className="cards__wrapper ">
            <ul className="cards__items">
              <CardItem
                src={img1}
                text="Experience the perfect blend of comfort and luxury in our hotel rooms."
                label="Room"
                path="/amenities"
              />
              <CardItem
                src={img2}
                text="Indulge in culinary delights within the inviting ambiance of our hotel dining room."
                label="Dining"
                path="/amenities"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={img3}
                text="Step into unparalleled luxury at our VIP dining room, where you'll experience exquisite dining with a view."
                label="VIP Dining"
                path="/amenities"
              />
              <CardItem
                src={img4}
                text="Experience the epitome of exclusivity and luxury with your own private pool."
                label="Pool"
                path="/amenities"
              />
              <CardItem
                src={img5}
                text="Elevate your stay to new heights on our spectacular hotel rooftop deck."
                label="Roof Deck"
                path="/amenities"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
