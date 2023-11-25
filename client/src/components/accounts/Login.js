import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from "axios";
import { redirect } from 'react-router-dom';

export default function SignUp (props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    const userLoginInfo = {
      action: "login",
      email: email,
      password: password
    };
    axios.post("http://localhost:3500/api/user/", userLoginInfo).then((repos) => {
      if (repos.data.role === "null") {
        console.log(repos.data.role);
      } else if (repos.data.role === "client") {
        console.log(repos.data.role);
        const userFound = {
          userId: repos.data.clientId,
          firstName: repos.data.firstName,
          lastName: repos.data.lastName,
          role: repos.data.role
        }
        localStorage.setItem('user',JSON.stringify(userFound));
        
        props.handleLogInClose();
        redirect("/login");
      } else {
        console.log(repos.data.role);
        const userFound = {
          userId: repos.data.clientId,
          firstName: repos.data.firstName,
          lastName: repos.data.lastName,
          role: repos.data.role,
          areaOfInterest: repos.data.areaOfInterest
        }
        localStorage.setItem('user',JSON.stringify(userFound));
        
        props.handleLogInClose();
        redirect("/login");
      }
    });
  };
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