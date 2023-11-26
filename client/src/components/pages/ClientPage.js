import axios from 'axios';
import { useState, useEffect} from 'react';
import ActiveTask from '../ActiveTasks';
import Historic from '../Historic';
import FormModal from '../Modal';

export default function ClientPage () {
  const [activeTasks,setActiveTasks] = useState([]);
  const[selectedTasks,setSelectedTasks] = useState([]);
  const [ historicTasks,setHistoricTasks] = useState([]);
  const [check, setCheck] = useState(false);
// fetch the data from server and store all the jobpost related to this user id in jobPosts, and localStorage (key: 'jobPosts')
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.userId;
    axios.get('http://localhost:3500/api/jobs/' + userId).then((repos) => {
      let jobPosts = repos.data;
      localStorage.setItem('jobPosts', JSON.stringify(jobPosts));
      setCheck(true);
    });
  },[]);

  const handleFormSubmit = (formData)=>{
    // setActiveTasks([...activeTasks,formData])
    setActiveTasks([...activeTasks,{taskName:formData.taskname}])
  }

  const handleCheckboxChange = (task)=>{
    if(selectedTasks.some((t)=> t.taskName === task.taskName)){
      
      setSelectedTasks(selectedTasks.filter((t)=> t.taskName !== task.taskName));
      setSelectedTasks([...selectedTasks,task]);
    }
    else{
      setHistoricTasks([...historicTasks,task])
    }
  }
  return (
    (check?<div className="card">
      <h2 className="mx-auto">Client Page</h2>
      <div className="actions">
        <div className="w-50 p-3 d-inlineBlock">
          <ActiveTask onCheckboxChange={handleCheckboxChange}/>
        </div>
        <div className="w-50 p-3 d-inlineBlock">
          <Historic />
        </div>
        <div>
        <FormModal onFormSubmit={handleFormSubmit}/> 
        </div>
      </div>
    </div>: <></>)
  );
}