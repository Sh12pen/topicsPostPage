
function Task(props){
    return (
        <li>
          {props.description}
          <button onClick={props.onDelete}>Delete</button>
        </li>
      );
}

export default Task;