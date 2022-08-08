import React from 'react';
import './App.css';
import {TodoContext} from "../TodoContext/TodoContext";
import {Title} from "../Title/Title";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoContainer} from "../TodoContainer/TodoContainer";
import {TodoAdd} from "../TodoAdd/TodoAdd";
import {useLocalStorage} from "../Storage/useLocalStorage";

function App() {
  const { loading, error, item, saveItem } = useLocalStorage()
  const [todos, setTodos] = React.useState( item )
  const [searchValue, setSearchValue] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

  saveItem(todos)

  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      searchValue,
      setSearchValue,
      modalVisible,
      setModalVisible,
      loading,
      error
    }}>

      <Title/>

      <TodoSearch/>

      <TodoContainer/>

      <TodoAdd/>

    </TodoContext.Provider> )
}

export default App;
