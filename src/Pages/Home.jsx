import React from "react";
import HeroSection from "../Components/HeroSection";
import HomeReviews from "../Components/HomeReviews";
import ThreeD from "../Components/ThreeD";
import RecomendedFood from "../Components/RecomendedFood";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <HomeReviews></HomeReviews>

      <RecomendedFood></RecomendedFood>
      {/* <ThreeD></ThreeD> */}
    </div>
  );
};

export default Home;
