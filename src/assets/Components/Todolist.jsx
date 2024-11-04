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

    <div className='container mb-5 bg-danger-subtle p-3'>
      <div className="todo-list">
          <h2>Todo List</h2>
          <input type="text" placeholder='Enter Your Task' value={newTask} onChange={handleInputChange}/>
          <button onClick={addTask} className='add-button'>Add</button>
      </div>

      <ol className='mt-4 task-list'>
        {tasks.map((task,index)=>
          <li key={index}>
            <span className='task-name'>{task}</span> 
            <button onClick={()=>deleteTask(index)}>delete</button>
            <button onClick={()=>moveTaskUp(index)}>👆</button>
            <button onClick={()=>moveTaskDown(index)}>👇</button>
          </li>
        )}
      </ol>
      
    </div>
    
  )
}

export default Todolist
