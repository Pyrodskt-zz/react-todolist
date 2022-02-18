import React from 'react'
import Todo from './Todo'
import './Todolist.css'
export default function TodolistCompleted( { todos, setTodos }) {
  return (
    <div className="list">
      <h1 className="list-title">Completed</h1>
      {todos.filter(todo => todo.completed === true).map(todo => { return <Todo todo={todo} key={todo.id} setTodos={setTodos}/>})}
    </div>
  )
}
