import React from "react";
import {Todo} from "../Todo/Todo";

const localStorageKey = 'MY_TODOS_V1';

const initialValue = [
  {text:"comprar lechuga", completed: false},
  {text:"comprar papa", completed: true},
  {text:"comprar tomate", completed: false}];

function useLocalStorage() {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(localStorageKey);
        let parsedItem :Todo[];

        if (!localStorageItem) {
          localStorage.setItem(localStorageKey, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem as string) as Array<Todo>;
        }

        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        console.log('failed to load data with error: ' + error);
        setError(true);
      }
    }, 2000);
  });

  const saveItem = (items :any) => localStorage.setItem(localStorageKey, JSON.stringify(items));

  return {
    error,
    loading,
    item,
    saveItem
  };
}

export {useLocalStorage}