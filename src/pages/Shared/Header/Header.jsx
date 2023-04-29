import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="text-center py-5 mx-auto">
        <img src={logo} alt="logo" />
        <h3 className="text-secondary py-3">
          Journalism Without Fear or Favour
        </h3>
        <p className="text-secondary">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>

      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger text-xl-start" speed={50}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
          unde.
        </Marquee>
      </div>
    
    </header>
  );
};

export default Header;
