import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, updateUserProfile, emailVerify } =
    useContext(AuthContext);

  const [error, setError] = useState("");

  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    // console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateProfile(name, photoURL);
        handleEmailVerify();
        toast("Please verify your email address");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleTermsAndCondition = (event) => {
    setAccepted(event.target.checked);
  };

  const handleUpdateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleEmailVerify = () => {
    emailVerify()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" name="name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" placeholder="Photo URL" name="photoURL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleTermsAndCondition}
          type="checkbox"
          label={
            <>
              Accept <Link to="/terms">Terms and Condition</Link>
            </>
          }
        />
      </Form.Group>
      <p className="text-danger">{error}</p>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <ToastContainer />
    </Form>
  );
};

export default Register;
