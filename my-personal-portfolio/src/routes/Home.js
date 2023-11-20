import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Intro />
      <Footer/>
    </div>
  );
};

export default Home;
