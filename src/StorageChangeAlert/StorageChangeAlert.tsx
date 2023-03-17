import React from 'react';
import {withStorageListener} from "./withStorageListener";


interface ToggleComponent {
    show : boolean,
    toggle : () => void,
}

function StorageChangeAlert({show, toggle} : ToggleComponent) {
    if(!show)
        return <></>;

    const onClickAction = () => toggle();

    return (

        <>
            <p>Hubo cambios sobre los todos en otra pestaña de tu navegador. ¡Por favor actualiza tu pestaña!</p>
            <button
                onClick={onClickAction}
            >
                Actualizar esta pestaña
            </button>
        </>
    );
}

const StorageChangeAlertWithListener = withStorageListener(StorageChangeAlert);

export default StorageChangeAlertWithListener;

export type {ToggleComponent};