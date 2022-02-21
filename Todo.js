import React, { useRef } from 'react'
import './Todo.css';
export default function Todo({todo, setTodos}) {
  const checkboxRef = useRef()

  function updateCompleted(){
    const state = checkboxRef.current.checked
    todo.completed = state
    console.log(todo)
  }
  return (
    <div class="task">
      <input class="checkbox" type="checkbox" checked={todo.completed} onChange={updateCompleted} ref={checkboxRef}></input>
      <h4 class="title">{todo.title}</h4>
      <h4 class="date">{todo.date}</h4>
    </div>
  )
}
