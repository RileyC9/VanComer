import { useState } from "react";
import FormModal from "./Modal";
import ActiveTask from "./ActiveTasks";
import Historic from "./Historic";
import PotentialJobs from "./pages/PotentialJobs";


function ClientPage(props) {
    
  const [activeTasks,setActiveTasks] = useState([]);
  const[selectedTasks,setSelectedTasks] = useState([]);
  const [ historicTasks,setHistoricTasks] = useState([]);

  const handleFormSubmit = (formData)=>{
    // setActiveTasks([...activeTasks,formData])
    setActiveTasks([...activeTasks,{taskName:formData.taskname}])
  }

  const handleCheckboxChange = (task)=>{
    if(selectedTasks.some((t)=> t.taskName === task.taskName)){
      
      setSelectedTasks(selectedTasks.filter((t)=> t.taskName !== task.taskName));
      setSelectedTasks([...selectedTasks,task])
     
     ;
    }
    else{
      setHistoricTasks([...historicTasks,task])
    }
  }
  const clientPage = 
    (<div className="card">
      <h2 className="mx-auto">Client Page</h2>
      <div className="actions">
      
    <>
      <ActiveTask tasks={activeTasks} onCheckboxChange={handleCheckboxChange}/>
      <Historic selectedTasks={historicTasks}/>
    </>

    <>
    <FormModal onFormSubmit={handleFormSubmit}/> 
    </>

      </div>
    </div>);

    
  
  return(
    <>

  ((role == "client")? {clientPage}:<PotentialJobs/>);
    {/* <ActiveTask/> */}
    {/* <PotentialJobs/> */}
    </>

    
)
}

export default ClientPage;