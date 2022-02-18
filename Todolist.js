import React from 'react'
import Todo from './Todo.js'
import './Todolist.css'
export default function Todolist( { todos, setTodos } ) {

  return (
    <div className="list">
      <h1 className="list-title">To do List</h1>
      {todos.map(todo => { return <Todo todo={todo} key={todo.id} setTodos={setTodos}/>})}
    </div>
  )
}
