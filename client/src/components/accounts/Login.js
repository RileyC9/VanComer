import { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form, Modal } from 'react-bootstrap';
import axios from "axios";

export default function SignUp (props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [user,setUser] = useState();
  const handleLogin = () => {
    const userLoginInfo = {
      email: email,
      password: password
    };
    axios.get("http://localhost:3500/api/user/", {userLoginInfo}).then((repos) => {
      if (repos.role == "null") {
        setMessage("Invalid email or password");
      } else {
        setUser(repos.user);
      }
    });
  }
  return (
    <>
      <Modal show={props.logInShow} onHide={props.handleLogInClose}>
        <Modal.Header closeButton>
          <Modal.Title>VanComer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="mb-3 mt-4">
          <p className=" mb-5">Login</p>
          <Form>
            <Form.Group className = "mb-3" controlId="formBasicEmail">
            <Form.Label> Email address</Form.Label>
            <Form.Control
            type="email"
            placeholder='johnsmith123@example.com' 
            onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
              type="password"
              placeholder="Enter your Password"
              onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </div>
        </Modal.Body>
      </Modal>
    </>
    
    
  )
}