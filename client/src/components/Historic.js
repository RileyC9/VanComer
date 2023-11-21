import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Historic(props){
    return (
        <>
              <Card border="danger" style={{ width: '30rem' }}>
                <Card.Header>Tasks History</Card.Header>
                <Card.Body>
                  <ListGroup className="list-group-flush">
                    {props.selectedTasks.map((task,index)=>(
                        <ListGroup.Item key={index}>{task.taskName}</ListGroup.Item>
                    ))}
                      </ListGroup>
                </Card.Body>
              </Card>
              <br />
            </>
        )}
export default Historic;