import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

// JSON.parse(localStorage.getItem('userData'));

function ActiveTask(props) {
  const [jobPosts, setJobPosts] = useState([]);
  const [show, setShow] = useState(false);

  //For opening the modals: pending
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const [applicants, setApplicants]=useState([]);

  // filter the job posts that is created by the user and is not completed
  // async and await???
  useEffect(() => {
    let jobPostsTemp = JSON.parse(localStorage.getItem("jobPosts"));
    setJobPosts(jobPostsTemp.filter((job) => job.status !== "completed"));
  }, []);

  // //Filter the jobs that do not have applicants
  // useEffect(() => {
  //   let jobPostsTemp = JSON.parse(localStorage.getItem('jobPosts'));
  //  setApplicants(jobPostsTemp.filter((job) => job.status !== "completed" && job.applicants.length===0));
  // },[]);

  return (
    <>
      <Card style={{ width: "60rem" }}>
        <Card.Header>Active Tasks</Card.Header>
        <Card.Body className="px-4 pt-4">
          <MDBRow>
            {jobPosts.map((job, index) => (
              <MDBCol xl={6} className="mb-4" key={index}>
                <MDBCard className="h-100">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1"> {job.jobTitle}</p>
                          <p className="text-muted mb-0">
                            {job.jobDescription}
                          </p>
                        </div>
                      </div>
                      {/* <MDBBadge pill color='success' light>
                Active
              </MDBBadge> */}
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter
                    background="light"
                    border="0"
                    className="p-2 d-flex justify-content-around"
                  >
                    <MDBBtn
                      color="link"
                      rippleColor="primary"
                      className="text-reset m-0"
                    >
                      Message <MDBIcon fas icon="envelope" />
                    </MDBBtn>
                    <MDBBtn
                      color="link"
                      rippleColor="primary"
                      className="text-reset m-0"
                    >
                      Call <MDBIcon fas icon="phone" />
                    </MDBBtn>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </Card.Body>
      </Card>
    </>
  );
}
export default ActiveTask;
