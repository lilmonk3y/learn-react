import React, {ReactElement} from 'react';

interface TodoHeaderType {
    children : ReactElement[],
    loading : boolean,
}

function TodoHeader({children, loading} : TodoHeaderType) {
    return (
        <header>
            {
                React.Children
                    .map(children, child => React.cloneElement(child, {loading}))
            }
        </header>
    );
}

export default TodoHeader;