import React from 'react';
import './App.css';
import {Title} from "../Title/Title";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoContainer} from "../TodoContainer/TodoContainer";
import {TodoAdd} from "../TodoAdd/TodoAdd";
import useTodos from "./useTodos";

function App() {
  const {
      loading,
      error,
      todos,
      setTodos,
      searchValue,
      setSearchValue,
      modalVisible,
      setModalVisible,
  } = useTodos();

  return (
  <>
      <Title todos={todos}/>

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoContainer todos={todos} loading={loading} searchValue={searchValue} error={error} setTodos={setTodos}/>

      <TodoAdd setModalVisible={setModalVisible} setTodos={setTodos} modalVisible={modalVisible} />
  </>
  );
}

export default App;
