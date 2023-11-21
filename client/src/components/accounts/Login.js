import { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form, Modal } from 'react-bootstrap';

export default function SignUp (props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
        </Modal.Body>
      </Modal>
    </>
    
    
  )
}