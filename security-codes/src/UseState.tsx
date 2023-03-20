import React from 'react';

interface UseStateType {
    name : string,
}

const SECURITY_CODE = 'UseState';

const UseState = ({name} : UseStateType) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setError(false);
            setLoading(false);

            if( value.length !== 0 && value !== SECURITY_CODE)
                setError(true);
        }, 1000);
    }, [loading]);

    return (
        <div>
            <h1>Eliminar {name}</h1>
            <p>Por favor escribe el código de seguridad</p>

            { !loading && error && <p> Error: El código ingresado es incorrecto </p> }
            { loading && <p> Cargando... </p> }

            <div className='security-code'>
                <input
                    value={value}
                    onInput={(event : React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
                    placeholder='Código de seguridad'/>
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