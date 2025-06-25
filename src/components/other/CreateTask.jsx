import React ,{useContext,useState}from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
 const [userData, setUserData] = useContext(AuthContext)

 
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignedTo, setAssignedTo] = useState(''); 
  const [category, setCategory] = useState(''); 
  const [taskDescription, setTaskDescription] = useState('');
  const [newTask,setNewTask]=useState({});
  const submitHandler = (e) => {
      e.preventDefault();
    setNewTask({taskTitle, taskDate, category, taskDescription, active:false, newTask:true,failed:true,completed:false});
    const data=userData

    data.forEach(function(elem){
if(assignedTo==elem.firstName){
  elem.tasks.push(newTask);
  elem.taskCounts.newTask=elem.taskCounts.newTask+1;
    }})
    setUserData(data);
    console.log(data);
setCategory('');  
setTaskDate('');
setTaskDescription('');
setTaskTitle('');
  }
return(
<div className='p-5 mt-7 rounded'>
    <form onSubmit={(e)=>{
      submitHandler(e) ;
    }} className='flex flex-wrap items-start justify-between w-full '>
        <div className='w-1/2'>
           <div > <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
        <input value={taskTitle}
        onChange={((e)=>{
          setTaskTitle(e.target.value);
        })} className='bg-transparent border-2 px-2 py-1 text-sm w-4/5 rounded outline-none border-[1px] border-gray-400 ' type="" placeholder='Make a UI design'></input></div>
        <div>
            
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
        <input 
        value={taskDate}
        onChange={((e)=>{
          setTaskDate(e.target.value);
        })}
         className='bg-transparent border-2 px-2 py-1 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4 ' type="date"></input></div>
       <div>

         <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
        <input 
        value={assignedTo}
        onChange={((e)=>{
          setAssignedTo(e.target.value);
        })} className='bg-transparent border-2 px-2 py-1 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4 ' type='text' placeholder='Employee name'></input></div>

        <div>
 <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
        <input  
        value={category}
        onChange={((e)=>{
          setCategory(e.target.value);
        })}className='bg-transparent border-2 px-2 py-1 w-4/5 rounded outline-none  border-[1px] border-gray-400 mb-4' type ='text' placeholder='design,dev,etc..'></input></div>

        </div>

        <div className='w=2/5 flex flex-col items-start '>
        <h3 
        value={taskDescription}
        onChange={((e)=>{
          setTaskDescription(e.target.value);
        })}className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
        <textarea className='w-full h-44 text-sm py-2 px-20 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id=""></textarea></div>
    
        <button className='bg-teal-500 py-3 hover:bg-teal-700 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
    </form>
</div>)
}
export default CreateTask;