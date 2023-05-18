function TaskItem({title,id,state,toggleComplete,deleteTask}){

    function handleComplete(){
        toggleComplete(id);
    }  
    
    function dt(){
        deleteTask(id);
    }

    return (
        <div>
            <input type="checkbox" onChange={handleComplete}/>
            <span style={{textDecoration:state?"line-through":"none"}} >{title}</span>
             <button onClick={dt} >Delete</button> 
        </div>
    )
}

export default TaskItem;