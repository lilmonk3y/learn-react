import React from 'react';

import {useLocalStorage} from "../Storage/useLocalStorage";

function useTodos(){
    const { loading, error, item: todos, saveItem :saveTodos, synchronize } = useLocalStorage();
    const [searchValue, setSearchValue] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);

    return {
        loading,
        error,
        todos,
        searchValue,
        setSearchValue,
        modalVisible,
        setModalVisible,
        saveTodos,
        synchronizeTodos : synchronize,
    }
}

export default useTodos;