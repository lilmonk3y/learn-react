import React, {ReactElement} from "react";
import {localStorageKey} from "../Storage/useLocalStorage";
import {ToggleComponent} from "./StorageChangeAlert";

interface Reloader {
    synchronizeTodos: () => void,
}

function withStorageListener(Component : (props : ToggleComponent) => ReactElement) {
    return function ComponentWithListener({synchronizeTodos} : Reloader) {
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
        return (
            <Component
                show={storageChange}
                toggle={toggleAction}
            />
        );
    }
}

export {withStorageListener};

export type {ToggleComponent};