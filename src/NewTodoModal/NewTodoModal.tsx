import ReactDOM from "react-dom";
import './NewTodoModal.css'
import {TodoContext, TodoContextType} from "../TodoContext/TodoContext";
import React, {FormEvent} from "react";


function NewTodoModal() {
  return ReactDOM.createPortal((
    <NewTodo/>
    ), document.getElementById('modal') as HTMLElement)
}

function NewTodo() {
  const {modalVisible, setModalVisible, setTodos} = React.useContext(TodoContext) as TodoContextType

  const closeModal = () => setModalVisible(false)

  const addTodo = () => {
    let input = document.getElementById('modal_input') as HTMLInputElement

    setTodos(prevState => prevState.concat([{text: input.value, completed: false}]))

    setModalVisible(false)
  }

  const submitForm = (event :FormEvent) => {
    event.preventDefault()

    addTodo()
  }

  return(
    <>
      { modalVisible && (
          <div className='modal_container'>
            <form
              className='modal_box'
              onSubmit={event => submitForm(event)}
            >
              <h1 className='modal_title'>
                Agrega tu nueva tarea a completar!!!
              </h1>
              <textarea
                id='modal_input'
                placeholder='¿Qué quieres completar?'
                className='input_box'
                required={true}
                autoComplete='off'
              />
              <div className='button_box'>
                <button className='button_cancel' onClick={closeModal}>Cancelar</button>
                <button className='button_submit' onClick={addTodo}>Agregar</button>
              </div>
            </form>
          </div>
      )}
    </>
  )
}

export {NewTodoModal}