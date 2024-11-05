import React, {useState} from 'react'
import './todolist.css'

function Todolist() {

  const [tasks,setTasks] = useState([]);

  const [newTask,setNewTask] = useState("");

  function handleInputChange(e){
    setNewTask(e.target.value);
  }

  function addTask(){
    if(newTask.trim()!==""){
      setTasks(t=>[...t,newTask]);
      setNewTask("");
    }

  }

  function deleteTask(index){
    const updateTasks = tasks.filter((_,i)=> i !==index);
    setTasks(updateTasks);
  }

  function moveTaskUp(index){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index){
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }

  return (

    <div className='container todolist-app mb-5 p-3'>
      <div className="todo-list text-center ">
          <h2 className='mb-3'>Todo List</h2>
          <input type="text" placeholder='Enter Your Task' value={newTask} onChange={handleInputChange}/>
          <button onClick={addTask} className='add-button'>Add+</button>

          <ol className='mt-4 task-list'>
            {tasks.map((task,index)=>
             <li key={index}>
                <span className='task-name'>{task}</span> 
                <button className='move-button' onClick={()=>moveTaskUp(index)}>↑</button>
                <button className='move-button' onClick={()=>moveTaskDown(index)}>↓</button>
                <button className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>
              </li>
             )}
          </ol>

      </div>

      
      
    </div>
    
  )
}

export default Todolist
