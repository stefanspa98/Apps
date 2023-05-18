import { useState } from "react";
import TaskList from "./TaskList";

function AddTask() {
    const [input, setInput] = useState("");
    const [allTasks, setAllTasks] = useState([]);

    function handleInput(e) {
        setInput(e.target.value);
        
    }
    function addTask() {
        let newTask = {
            desc: input,
            date: Date.now(),
            isComplete: false
        };
        setAllTasks([...allTasks, newTask]);
        console.log(allTasks);
    }

    //  Fuuntion for checking tasks as completed

    function toggleComplete(id) {
        let updatedTaskList = allTasks.map((task) => {
            if (task.date === id) {
                return { ...task, isComplete: !task.isComplete }
            } else {
                return task;
            }
        })
        //  Updating the list of tasks in the allTasks array
        setAllTasks(updatedTaskList);
    }
    function deleteTask(id) {
        //deleting the item when button clicked
        let updatedTaskList = allTasks.splice(id,1);
        //  Updating the list of tasks in the allTasks array
        setAllTasks(updatedTaskList);
    }

    return (
        <div>
            <input type="text" onChange={handleInput} />
            <button onClick={addTask}>Add Task</button>
            <TaskList allTasks={allTasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        </div>
    )
}

export default AddTask;