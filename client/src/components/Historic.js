import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

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

function Historic(props) {
  const [jobPosts, setJobPosts] = useState([]);

  // filter the post that is created by user and is completed
  useEffect(() => {
    let jobPostsTemp = JSON.parse(localStorage.getItem("jobPosts")).filter(
      (job) => job.status === "completed"
    );

    setJobPosts(jobPostsTemp);
  }, []);
  return (
    <>
      <Card style={{ width: "60rem" }}>
        <Card.Header>Tasks History</Card.Header>
        <Card.Body>
          <MDBRow>
            {jobPosts.map((job, index) => (
              <MDBCol xl={6} className="mb-4" key={index}>
                <MDBCard>
                  {" "}
                  <MDBCardBody>
                    {" "}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt=""
                          style={{ width: "45px", height: "45px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1"> {job.jobTitle}</p>
                          <p className="text-muted mb-0">{job.jobDescription}</p>
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
export default Historic;
