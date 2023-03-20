import React from 'react';

interface UseStateType {
    name : string,
}

const SECURITY_CODE = 'UseState';

const UseState = ({name} : UseStateType) => {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
    });

    React.useEffect(() => {
        setTimeout(() => {
            if( state.value.length !== 0 && state.value !== SECURITY_CODE) {
                setState({...state, error: true, loading: false});
            } else {
                setState({...state, loading: false})
            }
        }, 1000);
    }, [state.loading]);

    return (
        <div>
            <h1>Eliminar {name}</h1>
            <p>Por favor escribe el código de seguridad</p>

            { !state.loading && state.error && <p> Error: El código ingresado es incorrecto </p> }
            { state.loading && <p> Cargando... </p> }

            <div className='security-code'>
                <input
                    value={state.value}
                    onInput={(event : React.ChangeEvent<HTMLInputElement>) => setState({...state, value: event.target.value})}
                    placeholder='Código de seguridad'/>
                <button
                    onClick={() => setState({...state, loading: true, error: false})}
                >
                    Comprobar
                </button>
            </div>
        </div>
    );
}

export {UseState};