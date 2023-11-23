import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

JSON.parse(localStorage.getItem('userData'));
function ActiveTask(props){
    return (

        
<>

      <Card border="primary" style={{ width: '30rem' }}>
        <Card.Header>Active Tasks</Card.Header>
        <Card.Body>
          <ListGroup className="list-group-flush">
              {props.tasks.map((task,index)=>(
                <ListGroup.Item key={index}>
                    {task.taskName}
                    <Form.Check aria-label="notActive" onChange={()=> props.onCheckboxChange(task)}/>
                </ListGroup.Item>
                
             ))}
              </ListGroup>
        </Card.Body>
      </Card>
      <br />
    </>
)}
export default ActiveTask;