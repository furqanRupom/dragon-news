import React from "react";
import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const NevigationBar = () => {
  const { user, SignOutUser } = useContext(AuthContext);
  const handleSignOutUser = () => {
    SignOutUser()
      .then((result) => console.log("logOut done"))
      .catch((error) => console.log(error.message));
  };
  return (
    <Navbar
      className="my-4"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className="mt-2" to="/">
              Home
            </Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav className="d-flex justify-content-between align-items-center">
            {user && (
              <Nav.Link>
                <FaUserCircle style={{ fontSize: "2rem" }} />
              </Nav.Link>
            )}

            {user ? (
              <Button
                onClick={handleSignOutUser}
                className="btn btn-secondary rounded-0 p-2"
              >
                Log out
              </Button>
            ) : (
              <Link to="/login">
                <Button className="btn btn-secondary rounded-0 p-2">
                  Log In
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NevigationBar;
