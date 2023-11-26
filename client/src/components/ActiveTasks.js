import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

// JSON.parse(localStorage.getItem('userData'));

function ActiveTask(props){
  const [jobPosts, setJobPosts]= useState([]);
  // filter the job posts that is created by the user and is not completed
  // async and await???
  useEffect(() => {
    let jobPostsTemp = JSON.parse(localStorage.getItem('jobPosts'));
    setJobPosts(jobPostsTemp.filter((job) => job.status !== "completed"));
  },[]);
  return (
    <>
      <Card border="primary" style={{ width: '30rem' }}>
        <Card.Header>Active Tasks</Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush">
              {jobPosts.map((job,index)=>(
                <ListGroup.Item key={index}>
                    {job.jobTitle}
                    <Form.Check aria-label="notActive" onChange={()=> props.onCheckboxChange(job)}/>
                </ListGroup.Item>
                
              ))}
              </ListGroup>
        </Card.Body>
      </Card>
      <br />
    </>
  )
}
export default ActiveTask;