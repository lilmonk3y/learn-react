import React from "react";
import './Title.css';
import {TodoContext, TodoContextType} from "../TodoContext/TodoContext";

function Title() {
    const {todos} = React.useContext(TodoContext) as TodoContextType;

    const completed = todos.filter(todo => todo.completed).length;
    const total = todos.length;
    return (
        <h1 className="title" >
            Completaste {completed} de tus {total} tareas
        </h1>
    );
}

export {Title}