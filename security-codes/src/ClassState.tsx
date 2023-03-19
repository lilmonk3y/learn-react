import React from 'react';

interface ClassStateProps {
    name: string,
}

interface ClassStateState {
    error: boolean,
}

class ClassState extends React.Component<ClassStateProps, ClassStateState> {
    constructor(props: ClassStateProps) {
        super(props);

        this.state = {
            error: false,
        };
    }

    render() {
        return (
            <div>
                <h1>Eliminar {this.props.name}</h1>
                <p>Por favor escribe el código de seguridad</p>

                { this.state.error && <p> Error: El código ingresado es incorrecto </p> }

                <div className='security-code'>
                    <input placeholder='Código de seguridad'/>
                    <button
                        onClick={() => this.setState(prevState => ({error: !prevState.error}))}
                    >
                        Comprobar
                    </button>
                </div>
            </div>
        );
    }
}

export {ClassState};