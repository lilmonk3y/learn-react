import React from "react";
import {localStorageKey} from "../Storage/useLocalStorage";

function useStorageListener(synchronizeTodos : () => void) {
    const [storageChange, setStorageChange] = React.useState(false);

    React.useEffect( () => {
        const eventAction = (event : Event) => {
            if((event as StorageEvent).key === localStorageKey){
                setStorageChange(true);
            }
        };

        window.addEventListener('storage', eventAction);
        return () => window.removeEventListener('storage', eventAction);
        }, []);

    const toggleAction = () => {
        synchronizeTodos();
        setStorageChange(false)
    }
    return {
        show : storageChange,
        toggle : toggleAction,
    };
}

export {useStorageListener};