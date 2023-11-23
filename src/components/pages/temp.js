import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const potentialJobsHandler =() => {
    
   
    alert("you apply successfully")

   
}



function PotentialJobs(props){

    return(
    <>
   

<h2 className="mx-auto">Job Seeker Page</h2>

<div class="row">
  <div class="col-sm-6">
  <Card border="primary" style={{ width: '30rem' }}>
        <Card.Header>Active Tasks</Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush">
              
                <ListGroup.Item >
                    
                    
                </ListGroup.Item>
                
             
              </ListGroup>
        </Card.Body>
      </Card>
      <br />
  </div>

  <div class="col-sm-6">


      <div className="card text-center" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Potential Jobs</h5>
          <p className="card-text"></p>
          <button type="button" onClick={potentialJobsHandler} class="btn btn-primary btn-sm">Apply</button>
        </div>
      </div> 
  </div>
      </div>
  <div class="col-sm-6">
  <Card border="danger" style={{ width: '30rem' }}>
        <Card.Header>Historic Tasks</Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush">
              
                <ListGroup.Item >
                    
                    
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