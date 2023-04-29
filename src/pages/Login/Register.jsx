import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { useRef } from "react";
import { useState } from "react";

const Register = () => {
  const { SignUpUser, UpdateProfile } = useContext(AuthContext);
  const [accepted,setAccepted] = useState(false);
  console.log(SignUpUser);
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const userNameRef = useRef();
  const userConfirmPassword = useRef();
  const handleCreateUserForm = (e) => {
    e.preventDefault();
    const Form = e.target;
    const name = userNameRef.current.value;
    const email = userEmailRef.current.value;
    const password = userPasswordRef.current.value;
    const ConfirmPassword = userConfirmPassword.current.value;
    if (password !== ConfirmPassword) {
      alert("password did not matched! your confirm password is wrong");
      return;
    }

    SignUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        UpdateProfile(result.user);
        Form.reset();
      })
      .catch((error) => console.log(error.message));
  };


  const handleChecked = (e)=>{
    const checkedValue = e.target.checked
    setAccepted(checkedValue)
  }
  return (
    <Container className="w-50 mx-auto">
      <h1 className="text-center py-4">Login</h1>
      <Form
        onSubmit={handleCreateUserForm}
        className="bg-secondary bg-opacity-50 p-5  rounded-5"
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            required
            ref={userNameRef}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
            ref={userEmailRef}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            ref={userPasswordRef}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="confirm"
            required
            ref={userConfirmPassword}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check onClick={handleChecked}
            required
            label={<>agree to <Link to="/terms">terns and condition</Link></> }
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button className="my-3 d-block" variant="secondary" disabled={!accepted} type="submit">
          Register
        </Button>
        <Form.Text className="text-danger">
          Already Have an account<Link to="/login">Login Now</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
