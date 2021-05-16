import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="item-1">
        Thank You For Stopping by, Feel Free To Contact me for any kind of
        Queries Or Services. Always will be Happy to ease your problems.
      </div>
      <div className="item-2">
        <h2>ADDRESS</h2>
        <div>
          <HomeIcon /> : Peshawar, Pakistan
        </div>
        <div>
          <EmailIcon /> : imrulafridi@gmail.com
        </div>
        <div>
          <PhoneIcon /> : +92 300 098 1885
        </div>
      </div>
      <div className="item-3">
        <div>
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <FacebookIcon fontSize="large" className="hover"/>
          </a>
        </div>
        <div>
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <TwitterIcon fontSize="large" />
          </a>
        </div>
        <div>
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large" />
          </a>
        </div>
        <div>
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon fontSize="large" />
          </a>
        </div>
      </div>
      <div className="item-4">&copy; 2021 Copyright, All Right Reserved.</div>
    </div>
  );
};

export default Footer;
