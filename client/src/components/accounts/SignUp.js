import { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form, Modal } from 'react-bootstrap';
import axios from "axios";

export default function SignUp (props) {
  // const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  var passwordCheckDisplay = "Notice: Password must be at least 10 characters, with at least one of each of capital letter, lowercase letter, number, and sign.";
  // password Validation
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);

  // useEffect(()=> {
  //   if (localStorage.getItem('states')) {
  //     setShow(JSON.parse(localStorage.getItem('state')).signUpPopDisplay);
  //   }
  // },[])
  const submitHandling = () => {
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      role: role,
      email: email,
      password: password
    }
    axios.post('http://localhost:3500/api/user/', {newUser}).then ((repos) => {
      if (repos.result == "success") {
        setLoggedIn(true);
      } else {
        setError(true);
      }
    })
  };
  return (
    <>
      <Modal show={props.signUpShow} onHide={props.handleSignUpClose}>
        <Modal.Header closeButton>
          <Modal.Title>VanComer</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="mb-3 mt-4">
            <p className=" mb-5">Please enter your details to join us!</p>
            <Form>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formFirstName"
                >
                  <Form.Label className="text-center">
                    First Name
                  </Form.Label>
                  <Form.Control
                  type="text"
                  placeholder="First Name"
                  onChange={(e)=>setFirstName(e.target.value)}/>
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formLastName"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    onChange={(e)=>setLastName(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Form.Group className = "mb-3" controlId="formBasicEmail">
              <Form.Label> Email address</Form.Label>
              <Form.Control
              type="email"
              placeholder='johnsmith123@example.com' 
              onChange={(e)=>setEmail(e.target.value)}/>
              {(error? <Form.Text className = "text-muted">
                We will never share your email with anyone else.
              </Form.Text>: <Form.Text className = "text-muted">
                This email already exist.
              </Form.Text>)}
              <Form.Text className = "text-muted">
                We will never share your email with anyone else.
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter your Password"
                onChange={(e)=>setPassword(e.target.value)} />
                <Form.Text className = "text-muted">
                {passwordCheckDisplay}
              </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter your Password" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={submitHandling}>
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
    
    
  )
}