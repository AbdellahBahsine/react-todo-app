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

    if(editing){
        return (
            <form onSubmit={handleUpdate}>
                <input type="text" value={task} onChange={handleChange} />
                <button>Save</button>
            </form>
        )
    } else{
        return (
            <li className="todo">
                <input id="todo" type="checkbox" onClick={() => props.ToggleComplete(props.id)} />
                <label htmlFor="todo" className={props.completed ? "completed" : ""}>
                    {props.task}
                </label>
                <i className="far fa-edit edit" onClick={() => ToggleEdit(props.id)}></i>
                <i className="far fa-trash-alt trash" onClick={() => props.removeTodo(props.id)}></i>
            </li>
        )
    }    

}

export default Todo;