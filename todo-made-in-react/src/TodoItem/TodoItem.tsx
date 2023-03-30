import './TodoItem.css';
import React from "react";
import {MdOutlineDeleteOutline} from 'react-icons/md';
import {Todo} from "../Todo/Todo";

interface TodoItemProps {
  text: string,
  completed: boolean,
  todos : Todo[],
  setTodos : (todos : Todo[]) => void,
  style?: any,
}

function TodoItem({text, completed, todos, setTodos, style}: TodoItemProps) {

  const onSelected = () => {
    setTodos(todos.map(todo => (
        todo.text === text ?
          {text: todo.text, completed: !todo.completed} :
          todo
      ))
    );
  }

  const deleteTodo = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    setTodos(todos.filter(todo => !(todo.text === text)));
    event.stopPropagation();
  }

  return (
    <li
      className={`todo_item ${completed ? 'todo_item_completed' : ''}`}
      onClick={onSelected}
      style={style}
    >
      <p> {text} </p>

        <MdOutlineDeleteOutline
          className='todo_item_icon'
          onClick={deleteTodo}
        />
    </li>
  );
}

export {TodoItem}