import './TodoContainer.css'
import {TodoItem} from "../TodoItem/TodoItem";
import React from "react";
import ContentLoader from 'react-content-loader'
import {TodoContext, TodoContextType} from "../TodoContext/TodoContext";
import {visibleTodos} from "../Todo/Todo";

function TodoContainer() {
  const {loading, error, todos, searchValue} = React.useContext(TodoContext) as TodoContextType

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
  )
}

function LoadingMock(props :any) {
  return (
    <ContentLoader
      speed={2}
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
      {...props}
    >
      <rect x="8" y="6" rx="4" ry="4" width="300" height="38"/>
      <rect x="8" y="55" rx="4" ry="4" width="300" height="38"/>
      <rect x="8" y="104" rx="4" ry="4" width="300" height="38"/>
    </ContentLoader>)
}

export {TodoContainer}