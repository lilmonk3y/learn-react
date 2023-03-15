import React from 'react';
import './App.css';
import {Title} from "../Title/Title";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {ErrorList, LoadingList, TodoList, EmptyList, PlaceholderList} from "../TodoContainer/TodoList";
import {TodoAdd} from "../TodoAdd/TodoAdd";
import useTodos from "./useTodos";
import {TodoItem} from "../TodoItem/TodoItem";
import {visibleTodos} from "../Todo/Todo";

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

      <TodoList
          loading={loading}
          error={error}
          todos={visibleTodos(todos,searchValue)}
          totalTodos={todos}
          onError={() => <ErrorList/>}
          onLoading={() => <LoadingList/>}
          onEmpty={() => <EmptyList searchPhrase={searchValue}/>}
          onFirstTodo={() => <PlaceholderList/>}
          // render={todo => (
          //     <TodoItem
          //         key={todo.text}
          //         text={todo.text}
          //         completed={todo.completed}
          //         setTodos={setTodos}
          //     />)}
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
