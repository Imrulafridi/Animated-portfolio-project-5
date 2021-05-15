import useWebAnimations from "@wellyshen/use-web-animations";
import React from "react";
import img from "../images/Contact.png"

const Contact = () => {

  const { ref , getAnimation} = useWebAnimations({
    keyframes: [
      {
        transform: "rotate3d(1, 1, 1, 360deg)",
      },
    ],
    animationOptions: {
      delay: 500,
      duration: 3000,
      iterations: "Infinity",
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  const reverse = () => {
    getAnimation().reverse()
  }

  return (
    <div className="contact">
      <div className="contact-text">
        <h1>CONTACT US</h1>
        <p>
          Please enter your contact details and send us your thought. We will
          get back to you within 24 hrs. Or You can directly contact us at
          <strong>
            <u> imrulafridi@gmail.com </u>
          </strong>
        </p>
        <img src={img} alt="Contact" ref={ref} onMouseOver={ reverse }/>
      </div>

      <div className="form">
        <div className="form-group">
          <h2>Your Details</h2>
          <div>
            <input type="text" name="name" placeholder="Your Name" />
          </div>
          <div>
            <input type="email" name="email" placeholder="Your Email" />
          </div>
          <div>
            <textarea
              name="description"
              cols="30"
              rows="10"
              placeholder="Description"
            ></textarea>
          </div>
          <div>
            <input type="submit" value="SUBMIT" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
