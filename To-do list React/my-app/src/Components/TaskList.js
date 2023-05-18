import TaskItem from "./TaskItem";

function TaskList({allTasks,toggleComplete,deleteTask}) {
    return (
        <div>
            <ul>
                {allTasks.map((task) => {
                    return <TaskItem title={task.desc} id={task.date} state={task.isComplete} toggleComplete={toggleComplete} deleteTask={deleteTask} />
                }) 
                }
            </ul>
        </div>
    )
}

export default TaskList;