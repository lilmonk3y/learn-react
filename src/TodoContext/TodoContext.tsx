import React from "react";
import {Todo} from "../Todo/Todo";

interface TodoContextType {
  todos :Todo[],
  setTodos :React.Dispatch<React.SetStateAction<Todo[]>>,
  searchValue :string,
  setSearchValue :React.Dispatch<React.SetStateAction<string>>,
  modalVisible :boolean,
  setModalVisible :React.Dispatch<React.SetStateAction<boolean>>,
  loading :boolean,
  error :boolean
}

const TodoContext = React.createContext<TodoContextType | null>(null)

export {TodoContext}
export type {TodoContextType}