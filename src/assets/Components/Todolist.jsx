import React, {useState} from 'react'

function Todolist() {
  const [tasks,setTasks] = useState([]);
  const [newTask,setNewTask] = useState("");
  function handleInputChange(e){

  }

  function addTask(){
    setTasks([...tasks,newTask]);
  }

  function removeTask(){
    setTasks(tasks.filter((task, index)=>))
  }


  return (

    <div className='container mb-5 bg-danger-subtle p-3'>
      <div className="input-content">
          <h2>Todo List</h2>
          <input type="text" placeholder='Enter Your Task'/>
          <button>Add Task</button>
      </div>
      
    </div>
    
  )
}

export default Todolist
