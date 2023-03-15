import React from 'react';

import {useLocalStorage} from "../Storage/useLocalStorage";

function useTodos(){
    const { loading, error, item, saveItem } = useLocalStorage();
    const [todos, setTodos] = React.useState( item );
    const [searchValue, setSearchValue] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);

    saveItem(todos);

    return {
        loading,
        error,
        todos,
        setTodos,
        searchValue,
        setSearchValue,
        modalVisible,
        setModalVisible,
    }
}

export default useTodos;