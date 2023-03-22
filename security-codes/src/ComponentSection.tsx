import React, {ReactElement} from 'react';

interface ComponentSectionType {
    name: string,
    children: ReactElement,
}

const ComponentSection = ({name, children} : ComponentSectionType) => (
    <section>
        <h1> Eliminar {name} </h1>
        {React.Children.map(children, child => React.cloneElement(child, {name}))}
    </section>
);

export {ComponentSection};