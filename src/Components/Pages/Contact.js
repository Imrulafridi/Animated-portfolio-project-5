import React from "react";
import img from "../images/Contact.png"

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-text">
        <h1>CONTACT US</h1>
        <p>
          Please enter your contact details and send us your thought. We will
          get back to you within 24 hrs. Or You can directly contact us at
        </p>
        <img src={img} alt="Contact"  />
      </div>

      <div className="form">
        <div className="form-group">
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
