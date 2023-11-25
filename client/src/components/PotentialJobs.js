import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { useEffect } from 'react';

const potentialJobsHandler =() => {
    alert("you apply successfully")
}



function PotentialJobs(props){
  // let jobs = [];
  const user = JSON.parse(localStorage.getItem("user"));
  const aOI = user.areaOfInterest;
  console.log(aOI);
  
  useEffect(() => {
    const request = {
    action: "related jobs",
    areaOfInterest: aOI
    };
    axios.post("http://localhost:3500/api/jobs/", request).then((repos) =>{
      const data = repos.data;
      console.log(data);
    }
    )
  });
    return(
    <>

<h2 className="mx-auto">Job Seeker Page</h2>
  <div className="col-sm-6">
  <Card border="danger" style={{ width: '30rem' }}>
        <Card.Header>Potential Jobs</Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush">
              <ListGroup.Item >
                List all the potential Jobs here please
              </ListGroup.Item>
            </ListGroup>
        </Card.Body>
      </Card>
      <br />
</div>
</>  
    );
}

export default PotentialJobs;