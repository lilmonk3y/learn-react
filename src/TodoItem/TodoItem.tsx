import './TodoItem.css';
import React from "react";
import {MdOutlineDeleteOutline} from 'react-icons/md';
import {Todo} from "../Todo/Todo";

interface TodoItemProps {
  text: string,
  completed: boolean,
  setTodos :React.Dispatch<React.SetStateAction<Todo[]>>,
}

function TodoItem({text, completed, setTodos}: TodoItemProps) {

  const onSelected = () => {
    setTodos(prevTodos => (
      prevTodos.map(todo => (
        todo.text === text ?
          {text: todo.text, completed: !todo.completed} :
          todo
      ))
    ));
  }

  const deleteTodo = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    setTodos((prevTodos) => prevTodos.filter(todo => !(todo.text === text)));
    event.stopPropagation();
  }

  return (
    <li
      className={`todo_item ${completed ? 'todo_item_completed' : ''}`}
      onClick={onSelected}
    >
      <p> {text} </p>

        <MdOutlineDeleteOutline
          className='todo_item_icon'
          onClick={(event) => deleteTodo(event)}
        />
    </li>
  );
}

export {TodoItem}