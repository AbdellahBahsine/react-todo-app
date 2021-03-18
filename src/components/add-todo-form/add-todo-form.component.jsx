import {useState} from 'react';

import './add-todo-form.component.css';

import { v4 as uuidv4 } from 'uuid';

const AddTodoForm = (props) => {

    const [todo, setTodo] = useState("");

    const handleChange = evt => {
        setTodo(evt.target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        if(todo.length === 0){
        return null;
        }
        props.setTodos([...props.todos, {id: uuidv4(), name: todo, completed: false}])
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="todo-input" type="text" placeholder="Add a new task..." value={todo} onChange={handleChange} />
            <button>Add</button>
        </form>
    )
}

export default AddTodoForm;