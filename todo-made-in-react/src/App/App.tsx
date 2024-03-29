import React from 'react';
import './App.css';
import {Title} from "../TodoHeader/Title/Title";
import {TodoSearch} from "../TodoHeader/TodoSearch/TodoSearch";
import {ErrorList, TodoList, EmptyList, PlaceholderList} from "../TodoList/TodoList";
import {LoadingList} from "../TodoList/LoadingList";
import {TodoAdd} from "../TodoAdd/TodoAdd";
import useTodos from "./useTodos";
import {TodoItem} from "../TodoItem/TodoItem";
import {visibleTodos} from "../Todo/Todo";
import TodoHeader from "../TodoHeader/TodoHeader";
import StorageChangeAlert from "../StorageChangeAlert/StorageChangeAlert";

function App() {
  const {
      loading,
      error,
      todos,
      searchValue,
      setSearchValue,
      modalVisible,
      setModalVisible,
      saveTodos,
      synchronizeTodos,
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
          {(todo , style)=> (
              <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  todos={todos}
                  setTodos={saveTodos}
                  style={style}
              />)}
      </TodoList>

      <StorageChangeAlert synchronizeTodos={synchronizeTodos} />

      <TodoAdd setModalVisible={setModalVisible} todos={todos} setTodos={saveTodos} modalVisible={modalVisible} />
  </>
  );
}

export default App;
