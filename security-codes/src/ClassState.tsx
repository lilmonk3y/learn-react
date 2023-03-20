import React from 'react';

interface ClassStateProps {
    name: string,
}

interface ClassStateState {
    error: boolean,
    loading: boolean,
    value: string,
}

const SECURITY_CODE = 'ClassState';

class ClassState extends React.Component<ClassStateProps, ClassStateState> {
    constructor(props: ClassStateProps) {
        super(props);

        this.state = {
            error: false,
            loading: false,
            value: '',
        };
    }

    componentDidUpdate() {
        if(this.state.loading) {
            setTimeout( () => {
                this.setState({loading:false});

                if(SECURITY_CODE !== this.state.value) {
                    this.setState({error: true});
                }
            }, 1000);
        }
    }

    render() {
        return (
            <div>
                <h1>Eliminar {this.props.name}</h1>
                <p>Por favor escribe el código de seguridad</p>

                {!this.state.loading && this.state.error && <p> Error: El código ingresado es incorrecto </p> }

                { this.state.loading && <p> Cargando... </p> }

                <div className='security-code'>
                    <input
                        placeholder='Código de seguridad'
                        value={this.state.value}
                        onInput={(event: React.ChangeEvent<HTMLInputElement>) => this.setState({value: event.target.value})}
                    />
                    <button
                        onClick={() => this.setState({loading: true, error: false})}
                    >
                        Comprobar
                    </button>
                </div>
            </div>
        );
    }
}

export {ClassState};