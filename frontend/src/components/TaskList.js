import Task from "./Task";
import TaskForm from "./TaskForm";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

//http://localhost:5000/tasks

const TaskList = () => {
  const [formData, setFormData] = useState({
    name: " ",
    completed:false
  })
  const {name}=formData

  const handleInputChange =(e) =>{
      const{name,value}=e.target
      setFormData({...formData,[name]:value}
        )
  };

  const createTask =async(e) => {
    e.preventDefault()
    if(name === ""){
      return toast.error("Input feild cannot be empty");
    }

    try {
      await axios.post("http://localhost:5000/tasks", formData)
      setFormData({...formData,name:""})
    } catch (error) {
      toast.error(error.message);
      
    }
  };
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm name={name} handleInputChange={handleInputChange} createTask={createTask}/>
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks:</b> 0
        </p>
        <p>
          <b>Completed Tasks:</b> 0
        </p>
      </div>
      <hr />
      <Task />
    </div>
  )
}

export default TaskList;