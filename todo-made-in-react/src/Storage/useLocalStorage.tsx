import React from "react";
import {Todo} from "../Todo/Todo";

const localStorageKey = 'MY_TODOS_V1';

const initialValue : Todo[] = [
  {text:"comprar lechuga", completed: false},
  {text:"comprar papa", completed: true},
  {text:"comprar tomate", completed: false}];

function useLocalStorage() {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  const [synchronized, setSynchronized] = React.useState(true);

  const onSuccess = (parsedItem: Todo[]) => {
    setError(false);
    setItem(parsedItem);
    setSynchronized(true);
    setLoading(false);
  }

  const onError = () => {
    setError(true);
  }

  const onSave = (items: Todo[]) => {
    setItem(items);
  }

  const onSynchronize = () => {
    setLoading(true);
    setSynchronized(false);
  }

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(localStorageKey);
        let parsedItem: Todo[];

        if (!localStorageItem) {
          localStorage.setItem(localStorageKey, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem as string) as Todo[];
        }

        onSuccess(parsedItem);
      } catch(error) {
        console.log('failed to load data with error: ' + error);
        onError();
      }
    }, 1000);
  }, [synchronized]);

  const saveItem = (items : Todo[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(items));
    onSave(items);
  }

  const synchronize = () => {
    onSynchronize();
  }

  return {
    error,
    loading,
    item,
    saveItem,
    synchronize,
  };
}

export {useLocalStorage, localStorageKey}