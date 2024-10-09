import React from "react";
import Hero from "../Component/Hero";
import NewArrivals from "../Component/NewArrivals";
import SingleImage from "../Component/SingleImage";
import VisitStore from "../Component/VisitStore";
import Different from "../Component/Different";
import ImageAlone from "../Component/ImageAlone";
import Faqs from "../Component/Faqs";
import OneStop from "../Component/OneStop";

const Home = () => {
  return (
    <>
      <Hero />
      <NewArrivals />
      <SingleImage />
      <VisitStore />
      <Different />
      <ImageAlone />
      <Faqs />
      <OneStop />
    </>
  );
};

export default Home;
