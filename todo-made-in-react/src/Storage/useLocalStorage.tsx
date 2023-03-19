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
  const [sincronized, setSincronized] = React.useState(true);

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
        setSincronized(true);
      } catch(error) {
        console.log('failed to load data with error: ' + error);
        setError(true);
      }
    }, 1000);
  }, [sincronized]);

  const saveItem = (items : Todo[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(items));
    setItem(items);
  }

  const synchronize = () => {
    setLoading(true);
    setSincronized(false);
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