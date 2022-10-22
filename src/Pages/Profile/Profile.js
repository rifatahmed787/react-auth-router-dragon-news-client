import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);

  const photoURLRef = useRef(user.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(photoURLRef.current);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Form className="mt-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          defaultValue={user?.email}
          type="email"
          placeholder="Enter email"
          readOnly
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>photoURL</Form.Label>
        <Form.Control
          ref={photoURLRef}
          defaultValue={user?.photoURL}
          type="text"
          placeholder="photoURL"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleNameChange}
          defaultValue={name}
          type="text"
          placeholder="Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
