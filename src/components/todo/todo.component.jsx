import {useState} from 'react';

import './todo.component.css';

const Todo = props => {
    const [editing, setEditing] = useState(false);
    const [task, setTask] = useState(props.task);

    const handleChange = (evt) => {
        setTask(evt.target.value)
    }

    const ToggleEdit = () => {
        setEditing(!editing)
    }

    const handleUpdate = evt => {
        evt.preventDefault()
        props.updateTodo(props.id, task);
        setEditing(false);
    }

    const handleToggle = () => {
        props.ToggleComplete(props.id)
    }

    if(editing){
        return (
            <form onSubmit={handleUpdate} className="edit-form" >
                <input type="text" className="edit-input" value={task} onChange={handleChange} />
                <button className="edit-btn">Save</button>
            </form> 
        )
    } else{
        return (
            <li className="todo">
                <input type="checkbox" className="checkbox" onClick={handleToggle} />
                <label className={props.completed ? "completed" : ""}>
                    {props.task}
                </label>
                <i className="far fa-edit edit" onClick={() => ToggleEdit(props.id)}></i>
                <i className="far fa-trash-alt trash" onClick={() => props.removeTodo(props.id)}></i>
            </li>
        )
    }    

}

export default Todo;