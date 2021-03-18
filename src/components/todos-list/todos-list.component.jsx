import {useState} from 'react';

import './todos-list.component.css';

import Todo from '../todo/todo.component';
import AddTodoForm from '../add-todo-form/add-todo-form.component';

const TodosList = () => {

    const [todos, setTodos] = useState([]);

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const ToggleComplete = (id) => {
        const updatedTodos = todos.map(todo => {
        if(todo.id === id){
            return ({...todo, completed: !todo.completed})
        }
        return todo;
        })
        setTodos(updatedTodos)
    }

    const updateTodo = (id, updatedTodo) => {
        const updatedTodos = todos.map(todo => {
        if(todo.id === id){
            return ({...todo, name: updatedTodo})
        }
        return todo;
        })
        setTodos(updatedTodos)
    }

    return (
        <div className="todos-list">
            <AddTodoForm todos={todos} setTodos={setTodos} />
            <ul className="list">
                {todos.map(todo => {
                    return (
                        <Todo key={todo.id} id={todo.id} task={todo.name} completed={todo.completed} removeTodo={removeTodo} ToggleComplete={ToggleComplete} updateTodo={updateTodo} />
                    )
                })}
            </ul>
        </div>
    )
}

export default TodosList;