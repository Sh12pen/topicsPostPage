import { useState } from 'react';
import Task from './components/Task';
import { v4 as uuidv4 } from 'uuid'; // Importing uuid library

function TaskList2() {
    const [tasks, setTasks] = useState([]);
    function addTask(event){
        event.preventDefault();
        let taskDescription = document.getElementById('newTaskInput').value;
        //or: let taskDescription = event.target.elements.newTaskInput.value;
        if (taskDescription.trim() !== '') {
            const newTask = { id: uuidv4(), description: taskDescription }; //creates a JavaScript object which has two properties
            setTasks([...tasks, newTask]);
          
        }
        document.getElementById('newTaskInput').value = '';
        //or: event.target.reset();
    }

    function deleteTask(taskId) {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        //.filter(): This is an array method that creates a new array by iterating over each element of the original array and applying a condition. It creates a new array based on whether elements meet that condition.
        //The underscore _ is a convention used when you don't need the value of the current element in the array (here, it's being ignored). The i represents the index of the current element being processed.
        setTasks(updatedTasks);
    };

    return(
        <div>
             <form onSubmit={addTask}>
                    <input
                        type="text"
                        id="newTaskInput"
                        placeholder="Enter a new task"
                    />
                    <button type="submit">Add</button>
            </form>
            <br/>
            <ul>
                {tasks.map((task) => (
                    <Task 
                    key={task.id}
                    id={task.id} 
                    description={task.description}
                    onDelete={() => deleteTask(task.id)} />
                ))}
            </ul>
        </div>
    );

}

export default TaskList2;