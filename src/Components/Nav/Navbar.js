import React, { useEffect } from "react";
import useWebAnimations, {
  fadeInDown,
  shakeX,
} from "@wellyshen/use-web-animations";
import { Link } from "react-router-dom";
import image from "../images/logo.png";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 9vh;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  div {
    max-width: 768px;
  }
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  const navbar = useWebAnimations({ ...fadeInDown });

  useEffect(() => {
    const nav = navbar.ref.current;
    nav.addEventListener("click", () => {
      navbar.animate({ ...shakeX });
    });
  });

  return (
    <Nav>
      <div className="logo" ref={navbar.ref}>
        <Link to="/">
          <img src={image} alt="logo" />
        </Link>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
