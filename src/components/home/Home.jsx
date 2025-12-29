import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section home-section" id="home">
      <div className="home__container container">
        <div className="home__content">
          <Data />
          <Social />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
