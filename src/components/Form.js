import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function form(props){



    function submitHandler(event){
        event.preventDefault();
        const enteredTaskName = event.target.elements.formGridTitle.value;

        const formData = {
           taskName:enteredTaskName,
         };

         props.onFormSubmit(formData);
    
    }

       
        
    

    
    return(
    <form className='form' onSubmit={submitHandler}>

<Row className="mb-3">
        <Form.Group as={Col} controlId="formGridTitle">
          <Form.Label>Task name</Form.Label>
          <Form.Control type="text" placeholder="Enter task name" />
        </Form.Group>
      </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="Enter frist name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last name </Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
      </Row>
      
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridDate">
    <Form.Label>Date:</Form.Label>
    <Form.Control type="date" />
    </Form.Group>
        
    </Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCategories">
          <Form.Label>categories</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Housing</option>
            <option>Transportation</option>
            <option>Education</option>
            <option>Employment</option>
            <option>Socializing</option>
            <option>General Task</option>
          </Form.Select>
        </Form.Group>
        

        
      <Form.Group className="mb-3" controlId="Description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
     

      <Button variant="primary" type="submit">
        Submit
      </Button>

       
        </form>
)};


export default form;