import React from 'react';
import './App.css';
import {Title} from "../TodoHeader/Title/Title";
import {TodoSearch} from "../TodoHeader/TodoSearch/TodoSearch";
import {ErrorList, LoadingList, TodoList, EmptyList, PlaceholderList} from "../TodoList/TodoList";
import {TodoAdd} from "../TodoAdd/TodoAdd";
import useTodos from "./useTodos";
import {TodoItem} from "../TodoItem/TodoItem";
import {visibleTodos} from "../Todo/Todo";
import TodoHeader from "../TodoHeader/TodoHeader";

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
      <TodoHeader loading={loading}>
          <Title todos={todos} />
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
          loading={loading}
          error={error}
          todos={visibleTodos(todos,searchValue)}
          totalTodos={todos}
          onError={() => <ErrorList/>}
          onLoading={() => <LoadingList/>}
          onEmpty={() => <EmptyList searchPhrase={searchValue}/>}
          onFirstTodo={() => <PlaceholderList/>}
      >
          {todo => (
              <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  setTodos={setTodos}
              />)}
      </TodoList>

      <TodoAdd setModalVisible={setModalVisible} setTodos={setTodos} modalVisible={modalVisible} />
  </>
  );
}

export default App;
