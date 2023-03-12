import './TodoItem.css';
import React from "react";
import {MdOutlineDeleteOutline} from 'react-icons/md';
import {TodoContext, TodoContextType} from "../TodoContext/TodoContext";

interface TodoItemProps {
  text: string
  completed: boolean
}

function TodoItem(props: TodoItemProps) {
  const {setTodos} = React.useContext(TodoContext) as TodoContextType;

  const onSelected = () => {
    setTodos(prevTodos => (
      prevTodos.map(todo => (
        todo.text === props.text ?
          {text: todo.text, completed: !todo.completed} :
          todo
      ))
    ));
  }

  const deleteTodo = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    setTodos((prevTodos) => prevTodos.filter(todo => !(todo.text === props.text)));
    event.stopPropagation();
  }

  return (
    <li
      className={`todo_item ${props.completed ? 'todo_item_completed' : ''}`}
      onClick={onSelected}
    >
      <p> {props.text} </p>

        <MdOutlineDeleteOutline
          className='todo_item_icon'
          onClick={(event) => deleteTodo(event)}
        />
    </li>
  );
}

export {TodoItem}