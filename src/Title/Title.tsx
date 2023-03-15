import React from "react";
import './Title.css';
import {Todo} from "../Todo/Todo";

interface TitleProps {
    todos : Todo[]
}

function Title({todos} : TitleProps) {
    const completed = todos.filter(todo => todo.completed).length;
    const total = todos.length;
    return (
        <h1 className="title" >
            Completaste {completed} de tus {total} tareas
        </h1>
    );
}

export {Title}