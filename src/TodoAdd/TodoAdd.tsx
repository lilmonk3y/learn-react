import './TodoAdd.css';
import React from "react";
import {NewTodoModal} from "../NewTodoModal/NewTodoModal";
import {Todo} from "../Todo/Todo";

interface TodoAddType {
    setModalVisible :React.Dispatch<React.SetStateAction<boolean>>,
    modalVisible : boolean,
    setTodos :React.Dispatch<React.SetStateAction<Todo[]>>,
}

function TodoAdd({ setModalVisible, setTodos, modalVisible } : TodoAddType) {
  return (
    <>
      <button
        className="todo_add"
        onClick={() => setModalVisible(prevState => !prevState)}
      >
        +
      </button>
      <NewTodoModal setTodos={setTodos} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
}

export {TodoAdd}