import React from "react";
import "./AboutMeCard.css"; // Ensure you have a CSS file for styling
import myphoto from "./assets/pp2.jpg";
import Cube from "./Cube";
import react from "./assets/react.png"; // Make sure to replace this with the actual path to your image
import nextJS from "./assets/next.png";
import redux from "./assets/redux.png";
import jQuery from "./assets/JQuery.png";
import sql from "./assets/sql.png";
import mongodb from "./assets/mongodb.png";
const AboutMeCard = () => {
  let arrayofObjects = [
    {
      topImage: jQuery,
      experience: "3 Years",
      year: "2021",
    },
    {
      topImage: nextJS,
      experience: "1 Years",
      year: "2023",
    },
    {
      topImage: react,
      experience: "2 Years",
      year: "2022",
    },
    {
      topImage: redux,
      experience: "2 Years",
      year: "2022",
    },
    {
      topImage: sql,
      experience: "2 Years",
      year: "2022",
    },
  ];
  return (
    <div className="about-card">
      <div className="about-card-content">
        <div className="about-me-heading"></div>
        <div className="about-me-description">
          <h2 style={{ color: "black" }}>About Me</h2>
          {/* Left Side: Description */}
          <p style={{ fontSize: "1.4rem", color: "black" }}>
            With 3 years of experience in web development, I have honed my
            skills in creating dynamic and responsive websites. My journey in
            the tech world has been both challenging and rewarding, allowing me
            to develop a deep understanding of various web technologies. I
            thrive in collaborative environments, where I can share ideas and
            learn from my peers. My colleagues often describe me as fun to work
            with and a team player who brings positive energy to the workplace.
            I am passionate about tackling new challenges, continuously
            learning, and pushing the boundaries of what's possible in web
            development.
          </p>
          <h3 style={{ lineHeight: "80px", color: "black", fontSize: "1.7rem"}}>Why me?</h3>
          {/* Left Side: Description */}
          <p style={{ fontSize: "1rem", color: "black" }}>
            With 3 years rocking web dev, I'm all about React, Node.js, and
            full-stack magic. Team player extraordinaire, I cook up cool and
            creative solutions. Always geeking out on new tech and aiming for
            top-notch results. Let's make awesome happen together!
          </p>
        </div>
        <div className="about-me-image">
          {/* Right Side: Image */}
          <img src={myphoto} alt="About Me" />
        </div>
      </div>
      <div style={{ display: "flex", position: "relative", zIndex: 1 }}>
        {arrayofObjects.map((data, index) => (
          <Cube
            key={index}
            topImage={data.topImage}
            experience={data.experience}
            year={data.year}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMeCard;
