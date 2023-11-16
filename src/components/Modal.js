
import Form from './Form';


function Modal (props){

    
    function cancelHandler() {
        props.onCancel();
      }

    return(
    <div className='modal'>

        <h1>From</h1>
        < Form />

      <button className='btn btn--alt' onClick={cancelHandler}>
        Cancel
      </button>
    </div>
    );
}

export default Modal;