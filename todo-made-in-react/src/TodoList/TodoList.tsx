import './TodoList.css';
import React, {ReactNode} from "react";
import {Todo} from "../Todo/Todo";
import {TodoListTransition} from "./TodoListTransition";

function ErrorList() {
  return <p>Error al cargar la información de la aplicación</p>;
}

interface EmptyListType {
  searchPhrase : string,
}

function EmptyList({searchPhrase} : EmptyListType) {
  return <p> No hay resultados para la busqueda {searchPhrase} </p>;
}

function PlaceholderList() {
  return <p> Crea tu primer todo </p>;
}

interface TodoListType {
  loading :boolean,
  error :boolean,
  todos :Todo[],
  onError : () => ReactNode,
  onLoading : () => ReactNode,
  onEmpty : () => ReactNode,
  onFirstTodo : () => ReactNode,
  totalTodos : Todo[],
  render? : (todo : Todo, style?: any) => ReactNode,
  children? : (todo : Todo, style?: any) => ReactNode,
}

type ListRender = (todo : Todo, style: any) => ReactNode;

function renderFunc(render: ListRender | undefined, children: ListRender | undefined) : ListRender {
    return render ? (render as ListRender) : (children as ListRender);
}

function TodoList({
                    loading,
                    error,
                    todos,
                    onError,
                    onLoading,
                    render,
                    onEmpty,
                    totalTodos,
                    children,
                    onFirstTodo
                  } : TodoListType) {
    return (
    <ul className='todo_container'>
      {error && onError()}
      {loading && !error && onLoading()}
      {!loading && !error && todos.length === 0 && totalTodos.length !== 0 && onEmpty()}
      {!loading && !error && todos.length === 0 && totalTodos.length === 0 && onFirstTodo()}
      {!loading && !error &&
          <TodoListTransition
              render={style =>
                  todos.map(todo => renderFunc(render, children)(todo, style))}
          />
      }
    </ul>
  );
}

export {TodoList, ErrorList, EmptyList, PlaceholderList}