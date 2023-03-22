import React from "react";
import {Todo} from "../Todo/Todo";

const localStorageKey = 'MY_TODOS_V1';

const initialItems = (key: string) => {
    const initialValue : Todo[] = [
        {text:"comprar lechuga", completed: false},
        {text:"comprar papa", completed: true},
        {text:"comprar tomate", completed: false}
    ];

    const localStorageItem = localStorage.getItem(key);
    let parsedItem: Todo[];

    if (!localStorageItem) {
        localStorage.setItem(key, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem as string) as Todo[];
    }
    return parsedItem;
}

interface UseLocalStorageStateType {
    error: boolean,
    loading: boolean,
    item: Todo[],
    synchronized: boolean,
}

enum ActionTypes {
    SAVE,
    ERROR,
    SUCCESS,
    SYNCHROSNIZE,
}

function useLocalStorage() {
    const [state, dispatch] = React.useReducer(reducer, {
        error: false,
        loading: true,
        item: initialItems(localStorageKey),
        synchronized: true,
    });

    const onSuccess = (parsedItem: Todo[]) => {
        dispatch({type: ActionTypes.SUCCESS, payload: parsedItem});
    }

    const onError = () => {
        dispatch({type: ActionTypes.ERROR});
    }

    const onSave = (items: Todo[]) => {
        dispatch({type: ActionTypes.SAVE, payload: items});
    }

    const onSynchronize = () => {
        dispatch({type: ActionTypes.SYNCHROSNIZE});
    }

    React.useEffect(() => {
        setTimeout(() => {
            try {
                onSuccess(initialItems(localStorageKey));
            } catch(error) {
                console.log('failed to load data with error: ' + error);
                onError();
            }
        }, 1000);
    }, [state.synchronized]);

    const saveItem = (items : Todo[]) => {
        localStorage.setItem(localStorageKey, JSON.stringify(items));
        onSave(items);
    }

    const synchronize = () => onSynchronize();

    return {
        error: state.error,
        loading: state.loading,
        item: state.item,
        saveItem,
        synchronize,
    };
}

type ReducerActionType = {type: ActionTypes, payload?: Todo[]};

type ReducerObject = {[key in ActionTypes]: UseLocalStorageStateType};

const reducerObject = (state: UseLocalStorageStateType, action: ReducerActionType): ReducerObject => ({
    [ActionTypes.SUCCESS]: {
        ...state,
        loading: false,
        synchronized: true,
        item: (action.payload as Todo[])
    },
    [ActionTypes.ERROR]: {
        ...state,
        error: true,
    },
    [ActionTypes.SAVE]: {
        ...state,
        item: (action.payload as Todo[])
    },
    [ActionTypes.SYNCHROSNIZE]: {
        ...state,
        loading: true,
        synchronized: false,
    }
})

const reducer = (state: UseLocalStorageStateType, action: ReducerActionType) : UseLocalStorageStateType =>
    reducerObject(state, action)[action.type];

export {useLocalStorage, localStorageKey}