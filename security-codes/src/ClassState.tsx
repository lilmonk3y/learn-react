import React from 'react';

interface ClassStateProps {
    name?: string,
}

interface ClassStateState {
    error: boolean,
    loading: boolean,
    value: string,
    confirmed: boolean,
    deleted: boolean,
}

class ClassState extends React.Component<ClassStateProps, ClassStateState> {
    constructor(props: ClassStateProps) {
        super(props);

        this.state = {
            error: false,
            loading: false,
            value: '',
            confirmed: false,
            deleted: false,
        };
    }

    componentDidUpdate() {
        if(this.state.loading) {
            setTimeout( () => {
                if(this.props?.name !== this.state.value) {
                    this.setState({error: true, loading: false});
                } else {
                    this.setState({confirmed: true, loading: false});
                }
            }, 1000);
        }
    }

    render() {
        if(!this.state.confirmed && !this.state.deleted) {
            return (
                <div>
                    <p>Por favor escribe el código de seguridad</p>

                    {!this.state.loading && this.state.error && <p> Error: El código ingresado es incorrecto </p>}

                    {this.state.loading && <p> Cargando... </p>}

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
        } else if( this.state.confirmed){
            return (
                <>
                    <p>Estás seguro que querés borrarlo?</p>
                    <button onClick={() => this.setState({deleted: true, confirmed: false})}>
                        Si, confirmado
                    </button>
                    <button onClick={() => this.setState({confirmed:false})}>
                        No, ahora no
                    </button>
                </>);
        } else {
            return (
                <>
                    <p>¿Querés reiniciar la sección?</p>
                    <button onClick={() => this.setState({confirmed: false, deleted: false})}>
                        Si, reiniciemos
                    </button>
                </>
            )
        }
    }
}

export {ClassState};