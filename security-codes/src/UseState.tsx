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
        confirmed: false,
        deleted: false,
    });

    React.useEffect(() => {
        setTimeout(() => {
            if( state.loading && state.value !== SECURITY_CODE) {
                setState({
                    ...state,
                    error: true,
                    loading: false,
                });
            } else if (state.loading && state.value === SECURITY_CODE){
                setState({
                    ...state,
                    loading: false,
                    confirmed: true,
                })
            }
        }, 1000);
    }, [state.loading]);

    if(!state.confirmed && !state.deleted){
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
    } else if( state.confirmed){
        return (
            <>
                <p>Estás seguro que querés borrarlo?</p>
                <button onClick={() => setState({...state, deleted: true, confirmed: false})}>
                    Si, confirmado
                </button>
                <button onClick={() => setState({...state, confirmed: false})}>
                    No, ahora no
                </button>
            </>);
    } else {
        return (
            <>
                <p>¿Querés reiniciar la sección?</p>
                <button onClick={() => setState({...state, deleted: false})}>
                    Si, reiniciemos
                </button>
            </>
        )
    }
}

export {UseState};