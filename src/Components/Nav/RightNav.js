import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    color: #021d35;
    padding: 18px 10px;
  }
  li:hover {
    color: #3ca4c3;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    z-index: 10;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    li:hover {
      color: #3ca4c3;
      cursor: pointer;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/">
        <li>Home</li>
      </Link>

      <Link to="/about">
        <li>About</li>
      </Link>

      <Link to="/projects">
        <li>Projects</li>
      </Link>

      <Link to="/contact">
        <li>Contact Us</li>
      </Link>
    </Ul>
  );
};

export default RightNav;
