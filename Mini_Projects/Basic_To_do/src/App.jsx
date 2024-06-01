import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegSquarePlus } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [currentTodo, setCurrentTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (!newTodo) return; // Prevent adding empty todos
    setTodos([...todos, { text: newTodo }]);
    setNewTodo('');
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEdit = (index) => {
    setIsEditing(index);
    setCurrentTodo(todos[index].text);
  };

  const handleUpdate = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, text: currentTodo } : todo
    );
    setTodos(updatedTodos);
    setIsEditing(null);
    setCurrentTodo('');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TO_DO_APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#to-do">To-Do List</Nav.Link>
            <Nav.Link href="#users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <form className='form' onSubmit={handleSubmit}>
          <div className="form-group">
            <label>To-do Item</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit" className="btn btn-primary mt-2">
              <FaRegSquarePlus /> Add
            </button>
          </div>
        </form>

        <ul className="list-group mt-4">
          {todos.map((todo, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {isEditing === index ? (
                <>
                  <input 
                    type="text"
                    className="form-control"
                    value={currentTodo}
                    onChange={(e) => setCurrentTodo(e.target.value)}
                  />
                  <button className="btn btn-success" onClick={() => handleUpdate(index)}>Update</button>
                </>
              ) : (
                <>
                  {todo.text}
                  <div>
                    <FaEdit style={{ cursor: 'pointer' }} onClick={() => handleEdit(index)} />
                    <TiDelete style={{ cursor: 'pointer', marginLeft: '25px' }} onClick={() => handleDelete(index)} />
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export default App;
