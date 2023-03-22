import React from 'react';

interface PropsType {
    name : string,
}

interface StateType {
    value: string,
    error: boolean,
    loading: boolean,
    confirmed: boolean,
    deleted: boolean,
}

const SECURITY_CODE = 'UseReducer';

enum Action {
    FAILED_CODE_INPUT,
    SUCCESSFUL_CODE_INPUT,
    CODE_INPUT_CHECK,
    CONFIRMED_ACCEPTED,
    CONFIRMED_DECLINED,
    DELETED,
    CODE_INPUT,
}

const UseReducer = ({name} : PropsType) => {
    const [state, dispatch] = React.useReducer(reducer,{
        value: '',
        error: false,
        loading: false,
        confirmed: false,
        deleted: false,
    });

    const onFailedCodeInput = () => {
        dispatch({type:Action.FAILED_CODE_INPUT});
    };

    const onSuccessfulCodeInput = () => {
        dispatch({type:Action.SUCCESSFUL_CODE_INPUT});
    };

    const onCodeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type:Action.CODE_INPUT, payload: {value: event.target.value}});
    };

    const onCodeInputCheck = () => {
        dispatch({type:Action.CODE_INPUT_CHECK});
    };

    const onConfirmedAccepted = () => {
        dispatch({type:Action.CONFIRMED_ACCEPTED});
    };

    const onConfirmedDeclined = () => {
        dispatch({type:Action.CONFIRMED_DECLINED});
    };

    const onDeleted = () => {
        dispatch({type:Action.DELETED});
    };

    React.useEffect(() => {
        setTimeout(() => {
            if( state.loading && state.value !== SECURITY_CODE) {
                onFailedCodeInput();
            } else if (state.loading && state.value === SECURITY_CODE){
                onSuccessfulCodeInput();
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


const states = (state : StateType, payload?: {value: string}) : { [key in Action] : StateType} => ({
    [Action.FAILED_CODE_INPUT]: {...state, error: true, loading: false},
    [Action.SUCCESSFUL_CODE_INPUT]: {...state, loading: false, confirmed: true,},
    [Action.CODE_INPUT_CHECK]: {...state, loading: true, error: false},
    [Action.CONFIRMED_ACCEPTED]: {...state, deleted: true, confirmed: false},
    [Action.CONFIRMED_DECLINED]: {...state, confirmed: false, deleted: false},
    [Action.DELETED]: {...state, deleted: false, confirmed: false},
    [Action.CODE_INPUT]: {...state, value: (payload?.value as string)},
})

const reducer = (state: StateType, action: {type: Action, payload?: {value: string}}) : StateType => {
    const stateForAction = states(state, action.payload)[action.type];
    if (stateForAction) {
        return stateForAction;
    } else {
        throw new Error('State for action not found: ' + action.type);
    }
}

export {UseReducer};
