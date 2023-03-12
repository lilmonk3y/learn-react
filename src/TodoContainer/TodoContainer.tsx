import './TodoContainer.css';
import {TodoItem} from "../TodoItem/TodoItem";
import React from "react";
import {TodoContext, TodoContextType} from "../TodoContext/TodoContext";
import {visibleTodos} from "../Todo/Todo";

function TodoContainer() {
  const {loading, error, todos, searchValue} = React.useContext(TodoContext) as TodoContextType;

  return (
    <ul className='todo_container'>
      {loading && !error && <p>Loading ...</p> }

      {!loading && !error &&
        visibleTodos(todos,searchValue).map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />))}

      {error && <p>Error al cargar la información de la aplicación</p> }
    </ul>
  );
}

export {TodoContainer}