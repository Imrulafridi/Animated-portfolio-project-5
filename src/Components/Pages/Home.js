import React from "react";
import { Link } from 'react-router-dom';
import Typewriter from "./Typewriter/typewriter";
import useWebAnimations, { fadeInRight } from "@wellyshen/use-web-animations";
import image from "../images/webdevep.svg";

const Home = () => {
  const words = [
    "Web Developer",
    "Web Designer",
    "FrontEnd Developer",
  ];

  const pic = useWebAnimations({
    keyframes: [{ transform: "translateY(50px)" }],
    animationOptions: {
      delay: 0, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out",
    },
  });
  const pause = () => {
    pic.getAnimation().pause();
  };

  const play = () => {
    pic.getAnimation().play();
  };
  return (
    <div className="showcase">
      <div className="showcase-content">
        <h2>
          I am a <Typewriter data={words} />
        </h2>
        <p>
          Hi My name is Imranullah Afridi, I am a full stack web developer with
          an experience of almost 3 years.{" "}
        </p>
        <Link to="/about" className="link-btn">
          LEARN MORE
        </Link>
      </div>
      <div className="showcase-pic">
        <img
          src={image}
          alt="Pic"
          ref={pic.ref}
          onMouseOver={pause}
          onMouseOut={play}
        />
      </div>
    </div>
  );
};

export default Home;
