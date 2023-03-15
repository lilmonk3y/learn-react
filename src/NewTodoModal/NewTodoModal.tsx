import ReactDOM from "react-dom";
import './NewTodoModal.css';
import React, {FormEvent} from "react";
import {Todo} from "../Todo/Todo";

function NewTodoModal({setModalVisible, modalVisible, setTodos} : NewTodoType) {
  return ReactDOM.createPortal(
    <NewTodo setTodos={setTodos} setModalVisible={setModalVisible} modalVisible={modalVisible} />,
    document.getElementById('modal') as HTMLElement);
}

interface NewTodoType {
  setModalVisible :React.Dispatch<React.SetStateAction<boolean>>,
  modalVisible : boolean,
  setTodos :React.Dispatch<React.SetStateAction<Todo[]>>,
}

function NewTodo({modalVisible, setModalVisible, setTodos} : NewTodoType) {

  const closeModal = () => setModalVisible(false);

  const addTodo = () => {
    let input = document.getElementById('modal_input') as HTMLInputElement;

    setTodos(prevState => prevState.concat([{text: input.value, completed: false}]));

    setModalVisible(false);
  }

  const submitForm = (event :FormEvent) => {
    event.preventDefault();

    addTodo();
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
                <button className='button_cancel' onClick={closeModal} type='button'>Cancelar</button>
                <button className='button_submit' onClick={addTodo} type='button'>Agregar</button>
              </div>
            </form>
          </div>
      )}
    </>
  );
}

export {NewTodoModal};

export type {NewTodoType};