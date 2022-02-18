import React, { useRef } from 'react'
import FormInput from './FormInput'
import './FormAdd.css'
export default function FormAdd({todos, setTodos}) {
    const formStyle = useRef();
    function showAddTodo() {
        if (formStyle.current.className === 'form-hidden')
        {
            formStyle.current.className = "form-active"
        }
        else {
            formStyle.current.className = "form-hidden"

        }
      }
  return (
    <div class="forminput" className='forminput'>
      <button onClick={showAddTodo}>Add Todo</button>
      <div ref={formStyle} class="form-hidden">
          <FormInput todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}
