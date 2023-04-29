import React, { useContext, useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { SignInUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const emailRef = useRef();
  const passwordRef = useRef();
  const location = useLocation()
  const form = location.state?.from?.pathname || "/category/0"
  const handleSubmit = (event) => {
    event.preventDefault();
    const Form = event.current;
    // handle form submission logic here
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    SignInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(form,{replace:true})
        Form.reset();
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Container className="w-50 mx-auto">
      <h1 className="text-center py-4">Login</h1>
      <Form
        onSubmit={handleSubmit}
        className="bg-secondary bg-opacity-50 p-5  rounded-5"
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
            ref={emailRef}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            ref={passwordRef}
          />
        </Form.Group>
      

        <Button className="my-3 d-block" variant="secondary" type="submit">
          Log In
        </Button>
        <Form.Text className="text-danger">
          Don't have an Account? <Link to="/register">Register now</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
