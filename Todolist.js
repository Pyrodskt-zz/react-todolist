import React from 'react'
import Todo from './Todo.js'
import './Todolist.css'
export default function Todolist( { todos, setTodos } ) {

  const element = (
    <div className="list">
      <h1 className="list-title">To do List</h1>
      {todos.filter(todo => todo.completed === false).map(todo => { return <Todo todo={todo} key={todo.id} setTodos={setTodos}/>})}
    </div>
  )
    return element
}
