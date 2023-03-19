import './TodoAdd.css';
import React from "react";
import {NewTodoModal} from "../NewTodoModal/NewTodoModal";
import {Todo} from "../Todo/Todo";

interface TodoAddType {
    setModalVisible :React.Dispatch<React.SetStateAction<boolean>>,
    modalVisible : boolean,
    todos : Todo[],
    setTodos : (todos : Todo[]) => void,
}

function TodoAdd({ modalVisible, setModalVisible, todos, setTodos  } : TodoAddType) {
  return (
    <>
      <button
        className="todo_add"
        onClick={() => setModalVisible(prevState => !prevState)}
      >
        +
      </button>
      <NewTodoModal todos={todos} setTodos={setTodos} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
}

export {TodoAdd}