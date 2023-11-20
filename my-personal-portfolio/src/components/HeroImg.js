import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/Intro-Img.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M MITHUN RAJ</p>
        <h1>A Passionate Software Developer</h1>
        <div>
          <Link to={"/project"} className="btn">
            Project
          </Link>
          <Link to={"/contact"} className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
