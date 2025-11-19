import React from "react";
import HeroSection from "../Components/HeroSection";
import HomeReviews from "../Components/HomeReviews";
import RecomendedFood from "../Components/RecomendedFood";
import Section2 from "../Components/Section2";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <HomeReviews></HomeReviews>

      <RecomendedFood></RecomendedFood>
      <Section2></Section2>
    </div>
  );
};

export default Home;
