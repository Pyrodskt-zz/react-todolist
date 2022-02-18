import React, {useRef} from 'react'
import "./FormInput.css"
import nextId from 'react-id-generator'
export default function FormInput({todos, setTodos}) {
  const dateRef = useRef()
  const nameRef = useRef()


  function handleAddTodo(){
    const htmlId = nextId()
    const name = nameRef.current.value
    const date = dateRef.current.value
    if (name === '' || date === '') return

    setTodos(prevTodos => {
      return [...prevTodos, {id: htmlId, title: name, completed: false, date: date}]
    })
    nameRef.current.value = null
    dateRef.current.value = null

  }

  return (
      <>
        <h3 class="form-title" >Add a Todo</h3>
        <label class="input-title">Task name</label>
        <input class="input" type="text" placeholder="Name of the task" ref={nameRef}></input>
        <br />
        <label class="input-title" >Task end-date</label>

        <input class="input date" type="date" ref={dateRef}></input>
        <br />
        <div class="btn-container">
        <button class="btn add" onClick={handleAddTodo}>Add</button>
        <button class="btn hide">Hide completed</button>
        </div>
        
        <br />
        <button class="btn clear">Remove completed</button>
      </>
  )
}
