import React from 'react';

interface UseStateType {
    name : string,
}

const UseState = ({name} : UseStateType) => {
    const [error] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, [loading]);

    return (
        <div>
            <h1>Eliminar {name}</h1>
            <p>Por favor escribe el código de seguridad</p>

            { error && <p> Error: El código ingresado es incorrecto </p> }
            { loading && <p> Cargando... </p> }

            <div className='security-code'>
                <input placeholder='Código de seguridad'/>
                <button
                    onClick={() => setLoading(true)}
                >
                    Comprobar
                </button>
            </div>
        </div>
    );
}

export {UseState};