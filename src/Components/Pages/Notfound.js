import React from "react";
import useWebAnimations, { shakeX } from "@wellyshen/use-web-animations";
import image from "../images/404.png";

const Notfound = () => {
  const { keyframes, animationOptions } = shakeX;
  const { ref } = useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      delay: 2000,
      iterations: Infinity,
      duration: 4000,
      easing: 'ease-in-out',
    },
  });

  return (
    <div>
      <img src={image} alt="Not Found" style={{ height: "300px" }} ref={ref} />
    </div>
  );
};

export default Notfound;
