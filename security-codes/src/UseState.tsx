import React from 'react';

interface UseStateType {
    name : string,
}

const UseState = ({name} : UseStateType) => {
    const [error, setError] = React.useState(false);

    return (
        <div>
            <h1>Eliminar {name}</h1>
            <p>Por favor escribe el código de seguridad</p>

            { error && <p> Error: El código ingresado es incorrecto </p> }

            <div className='security-code'>
                <input placeholder='Código de seguridad'/>
                <button
                    onClick={() => setError(prevState => !prevState)}
                >
                    Comprobar
                </button>
            </div>
        </div>
    );
}

export {UseState};