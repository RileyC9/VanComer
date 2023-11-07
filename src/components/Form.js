import{useRef} from 'react';
function Form(props){

    const titleInputRef = useRef();
    const dateInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredDate = titleInputRef.current.value;
        const enteredAddress = titleInputRef.current.value;
        const enteredDescription = titleInputRef.current.value;

        const formData = {
            id:1,
            title:enteredTitle,
            date:enteredDate,
            address:enteredAddress,
            description:enteredDescription
    
        };

        console.log(formData)
        
    }

    
    return(
    <form className='form' onSubmit={submitHandler}>

        <div className='control'>
        <label>Job Title:</label>
        <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className='control'>
        <label className="formInfo">date:</label>
        <input type="date" required id="date" ref={dateInputRef} />
        </div>
        <div className='control'>
        <label className="formInfo">location:</label>
        <input type="text" required id="location" ref={addressInputRef} />
        </div>
        <div className='control'>
        <label className="formInfo">description:</label>
        <textarea required row="5" ref={descriptionInputRef}></textarea>
        </div>

        <div className='actions'>
            <button>submit</button>
        </div>
       
        </form>
    );
}

export default Form;