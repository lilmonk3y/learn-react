import React from "react";
import './Title.css';
import '../Header.css'
import {Todo} from "../../Todo/Todo";

interface TitleProps {
    todos : Todo[],
    loading? : boolean,
}

function Title({todos, loading} : TitleProps) {
    const completed = todos.filter(todo => todo.completed).length;
    const total = todos.length;
    return (
        <h1 className={`title ${loading && "loading"}`} >
            Completaste {completed} de tus {total} tareas
        </h1>
    );
}

export {Title}