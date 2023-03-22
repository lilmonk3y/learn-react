import React from 'react';

interface UseStateType {
    name? : string,
}

const UseState = ({name} : UseStateType) => {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        confirmed: false,
        deleted: false,
    });

    const onFailedCodeInput = () => {
        setState({...state, error: true, loading: false,});
    };

    const onSuccessfulCodeInput = () => {
        setState({...state, loading: false, confirmed: true,});
    };

    const onCodeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, value: event.target.value});
    };

    const onCodeInputCheck = () => {
        setState({...state, loading: true, error: false});
    };

    const onConfirmedAccepted = () => {
        setState({...state, deleted: true, confirmed: false});
    };

    const onConfirmedDeclined = () => {
        setState({...state, confirmed: false, deleted: false});
    };

    const onDeleted = () => {
        setState({...state, deleted: false, confirmed: false});
    };

    React.useEffect(() => {
        setTimeout(() => {
            if( state.loading && state.value !== name) {
                onFailedCodeInput();
            } else if (state.loading && state.value === name){
                onSuccessfulCodeInput();
            }
        }, 1000);
    }, [state.loading]);

    if(!state.confirmed && !state.deleted){
        return (
            <div>
                <p>Por favor escribe el código de seguridad</p>

                { !state.loading && state.error && <p> Error: El código ingresado es incorrecto </p> }
                { state.loading && <p> Cargando... </p> }

                <div className='security-code'>
                    <input
                        value={state.value}
                        onInput={(event : React.ChangeEvent<HTMLInputElement>) => onCodeInput(event)}
                        placeholder='Código de seguridad'/>
                    <button onClick={onCodeInputCheck}>
                        Comprobar
                    </button>
                </div>
            </div>
        );
    } else if( state.confirmed){
        return (
            <>
                <p>Estás seguro que querés borrarlo?</p>
                <button onClick={onConfirmedAccepted}>
                    Si, confirmado
                </button>
                <button onClick={onConfirmedDeclined}>
                    No, ahora no
                </button>
            </>);
    } else {
        return (
            <>
                <p>¿Querés reiniciar la sección?</p>
                <button onClick={onDeleted}>
                    Si, reiniciemos
                </button>
            </>
        )
    }
}

export {UseState};