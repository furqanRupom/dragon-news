import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import bg from '../../../assets/bg.png'
import Qzone from "./Qzone";

const RightNav = () => {
  return (
    <div>
      <div>
        <h3 className="fw-bold text-secondary py-3">Login with</h3>
        <Button style={{ width: "100%" }} variant="outline-primary">
          <span className="pe-2">
            <FaGoogle />{" "}
          </span>{" "}
          Log in with Google
        </Button>
        <Button style={{ width: "100%" }} variant="outline-dark mt-2">
          <span className="pe-2">
            <FaGithub />
          </span>
          Log in with Github
        </Button>
      </div>

      <div>
        <ListGroup className="py-5">
            <h3 className="py-2 text-secondary">find on us</h3>
          <ListGroup.Item><FaFacebook />  <span className="ps-3">Facebook </span></ListGroup.Item>
          <ListGroup.Item><FaTwitter /> <span className="ps-3">Twitter</span></ListGroup.Item>
          <ListGroup.Item><FaInstagram />  <span className="ps-3">Instagram</span></ListGroup.Item>

        </ListGroup>
      </div>
      <Qzone />

      <div className="position-relative">

            <img src={bg} alt="" />

            <div className="position-absolute top-0 start-0 end-0 w-100 h-100 text-white px-2 d-flex flex-column justify-content-center align-content-center text-center">
                <div>

                <h1>
                Create an Amazing Newspaper
                </h1>
                <p className="py-5 px-3">
                Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                </p>

                <button className="btn btn-danger rounded-0 p-3">
                    Learn More
                </button>

                </div>
            </div>
      </div>
    </div>

  );
};

export default RightNav;
