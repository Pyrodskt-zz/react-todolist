import React from 'react'
import './Todo.css';
export default function Todo({todo, setTodos}) {
  function updateCompleted(){
    todo.completed = !todo.completed
    setTodos()
  }
  return (
    <div class="task">
      <input class="checkbox" type="checkbox" checked={todo.completed} onChange={updateCompleted}></input>
      <h4 class="title">{todo.title}</h4>
      <h4 class="date">{todo.date}</h4>
    </div>
  )
}
