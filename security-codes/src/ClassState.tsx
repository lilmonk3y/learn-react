import React from 'react';

interface ClassStateProps {
    name: string,
}

interface ClassStateState {
    error: boolean,
    loading: boolean,
}

class ClassState extends React.Component<ClassStateProps, ClassStateState> {
    constructor(props: ClassStateProps) {
        super(props);

        this.state = {
            error: false,
            loading: false,
        };
    }

    componentDidUpdate() {
        if(this.state.loading) {
            setTimeout( () => this.setState({loading: false}), 1000);
        }
    }

    render() {
        return (
            <div>
                <h1>Eliminar {this.props.name}</h1>
                <p>Por favor escribe el código de seguridad</p>

                { this.state.error && <p> Error: El código ingresado es incorrecto </p> }

                { this.state.loading && <p> Cargando... </p> }

                <div className='security-code'>
                    <input placeholder='Código de seguridad'/>
                    <button
                        onClick={() => this.setState({loading: true})}
                    >
                        Comprobar
                    </button>
                </div>
            </div>
        );
    }
}

export {ClassState};