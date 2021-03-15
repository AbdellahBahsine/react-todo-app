import './App.css';
import {useState} from 'react';

import { v4 as uuidv4 } from 'uuid';
import { Card, CardBody, Button, Input, InputGroup, InputGroupAddon, Row, Col, List, Container } from 'reactstrap';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  

  const handleChange = evt => {
    setTodo(evt.target.value)
  }

  const handleClick = evt => {
    evt.preventDefault();
    setTodos([...todos, {id: uuidv4(), name: todo, completed: false, editing: false}])
    setTodo("")
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleToggle = (id) => {
    const updatedTodos = todos.map(t => {
      if(t.id === id){
        return ({...t, completed: !t.completed})
      }
      return todo;
    })
    setTodos(updatedTodos)
  }


  const toggleEdit = (id) => {
    const updatedTodos = todos.map(t => {
      if(t.id === id){
        return ({...t, editing: !t.editing})
      }
      return todo;
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={12}>
            <h1>Todo App With React</h1>
            <Card>
              <CardBody>
                <InputGroup>
                    <Input type="text" placeholder="Add a new task..." value={todo} onChange={handleChange} />
                    <InputGroupAddon addonType="prepend"><Button color="primary" onClick={handleClick}>Add</Button></InputGroupAddon>
                </InputGroup>
                <List type="unstyled">
                  {todos.map(t => {
                    if(t.editing){
                      return (
                        <div>
                          <input type="text" value={todo} onChange={handleChange} />
                          <button>Save</button>
                        </div>
                      )
                    } else {
                      return (
                        <li key={t.id}><label className={t.completed ? "completed" : ""}><input className="checkbox" type="checkbox" onClick={() => handleToggle(t.id)} /> {t.name}</label> <i className="far fa-edit edit" onClick={() => toggleEdit(t.id)}></i><i className="far fa-trash-alt trash" onClick={() => removeTodo(t.id)}></i></li>
                      )
                    }
                  })}
                </List>
              </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
