import './App.css';
import Todolist from './Todolist';
import FormAdd from './FormAdd';
import React, { useState } from 'react'
import TodolistCompleted from './TodolistCompleted';


function App() {
  const [todos, setTodos] = useState([])

  return (
    <div class="app">

      <FormAdd todos={todos} setTodos={setTodos}/>
      <Todolist todos={todos} setTodos={setTodos}/>
      <TodolistCompleted todos={todos} setTodos={setTodos}/>
    </div>
      
  );
}

export default App;
