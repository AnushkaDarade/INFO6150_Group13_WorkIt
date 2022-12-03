import React from 'react';
import { useState } from "react";
import "./RegisterScreen.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:9002/user/create", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
        headers: { 'Content-Type': 'application/json' }

      });


      let resJson = await res.json();
      if (res.status === 201) {
        setName("");
        setEmail("");
        setPassword("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App1">
          
          <Card>
        <Card.Header className="register" as="h1">REGISTER</Card.Header>
        <Card.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className="name">Name</Form.Label>
        <Form.Control className="inputs" type="text" 
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className="email">Email address</Form.Label>
        <Form.Control className="inputs" type="email" 
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="password">Password</Form.Label>
        <Form.Control className="inputs" type="password" 
        value={password}
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create User
      </Button>
    </Form>
        </Card.Body>
      </Card>
      <div className="message">{message ? <p>{message}</p> : null}</div>

      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Create</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form> */}
    </div>
  );
}

export default RegisterScreen;
