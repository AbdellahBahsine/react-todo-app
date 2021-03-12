import './App.css';
import { Card, CardBody, Button, Input, InputGroup, InputGroupAddon, Row, Col, List, Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={12}>
            <h1>Todo App With React</h1>
            <Card>
              <CardBody>
                <InputGroup>
                    <Input type="text" placeholder="Add a new task..." />
                    <InputGroupAddon addonType="prepend"><Button color="primary">Add</Button></InputGroupAddon>
                </InputGroup>
                <List type="unstyled">
                  <li><label><input class="checkbox" type="checkbox" /> Finish 4 hours!</label> <i class="far fa-edit edit"></i><i class="far fa-trash-alt trash"></i></li>
                  <li><label><input class="checkbox" type="checkbox" /> Finish 4 hours!</label> <i class="far fa-edit edit"></i><i class="far fa-trash-alt trash"></i></li>
                  <li><label><input class="checkbox" type="checkbox" /> Finish 4 hours!</label> <i class="far fa-edit edit"></i><i class="far fa-trash-alt trash"></i></li>
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
