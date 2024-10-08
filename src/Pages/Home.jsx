import React from "react";
import Hero from "../Component/Hero";
import NewArrivals from "../Component/NewArrivals";
import SingleImage from "../Component/SingleImage";
import VisitStore from "../Component/VisitStore";

const Home = () => {
  return (
    <>
      <Hero />
      <NewArrivals />
      <SingleImage />
      <VisitStore />
    </>
  );
};

export default Home;
