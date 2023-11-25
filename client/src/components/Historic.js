import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useState, useEffect} from 'react';

function Historic(props){
  const [jobPosts, setJobPosts]= useState([]);

  // filter the post that is created by user and is completed
  useEffect(() => {
    let jobPostsTemp = JSON.parse(localStorage.getItem('jobPosts')).filter((job) => job.status === "completed");
    
    setJobPosts(jobPostsTemp);
  },[]);
  return (
    <>
      <Card border="danger" style={{ width: '30rem' }}>
        <Card.Header>Tasks History</Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush">
            {jobPosts.map((job,index)=>(
              <ListGroup.Item key={index}>{job.jobTitle}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      <br />
    </>
  )}
export default Historic;