import React, { useState } from 'react';
import './App.css';
import Todo from './components/Form.js';


function App() {
  const [ todoList, setTodoList ] = useState([])

  return (
    <div className="App">
      <Todo todoList = { todoList } setTodoList = { setTodoList }/>

    </div>
  );
}

export default App;