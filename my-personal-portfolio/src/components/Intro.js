import "./IntroStyles.css";
import intro from "../assets/MithunRaj.jpg";

import React from 'react'

const Intro = () => {
  return (
    <div className="intro">
        <div className="left">
            <img src={intro} alt="" />
        </div>
        <div className="right">
            <p>I'm a Front-End React Developer with a passion for crafting beautiful and interactive web applications. With expertise in React, HTML, CSS, and JavaScript, I create engaging user interfaces that deliver exceptional user experiences. Let's build something amazing together!</p>
        </div>
    </div>
  )
}

export default Intro;