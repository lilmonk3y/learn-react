import './TodoAdd.css';
import React from "react";
import {TodoContext, TodoContextType} from "../TodoContext/TodoContext";
import {NewTodoModal} from "../NewTodoModal/NewTodoModal";

function TodoAdd() {
  const {setModalVisible} = React.useContext(TodoContext) as TodoContextType;

  return (
    <>
      <button
        className="todo_add"
        onClick={() => setModalVisible(prevState => !prevState)}
      >
        +
      </button>
      <NewTodoModal/>
    </>
  );
}

export {TodoAdd}