import './TodoContainer.css';
import {TodoItem} from "../TodoItem/TodoItem";
import React from "react";
import {Todo, visibleTodos} from "../Todo/Todo";

interface TodoContainerType {
  loading :boolean,
  error :boolean,
  todos :Todo[],
  searchValue :string,
  setTodos :React.Dispatch<React.SetStateAction<Todo[]>>,
}

function TodoContainer({loading, error, todos, searchValue, setTodos} : TodoContainerType) {

  return (
    <ul className='todo_container'>
      {loading && !error && <p>Loading ...</p> }

      {!loading && !error &&
        visibleTodos(todos,searchValue).map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            setTodos={setTodos}
          />))}

      {error && <p>Error al cargar la información de la aplicación</p> }
    </ul>
  );
}

export {TodoContainer}