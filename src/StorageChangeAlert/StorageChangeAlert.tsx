import './StorageChange.css';
import React from 'react';
import {useStorageListener} from "./useStorageListener";

function StorageChangeAlert({synchronizeTodos} : {synchronizeTodos : () => void}) {
    const {show, toggle} = useStorageListener(synchronizeTodos);
    if(!show)
        return <></>;

    const onClickAction = () => toggle();

    return (

        <div className='StorageChange'>
            <div className='StorageChange-container'>
                <p>Hubo cambios sobre los todos en otra pestaña de tu navegador.</p>
                <p>¡Por favor actualiza tu pestaña!</p>
                <button className='StorageChange-button StorageChange-button--add' onClick={onClickAction}>
                    Actualizar
                </button>
            </div>
        </div>
    );
}

export default StorageChangeAlert;