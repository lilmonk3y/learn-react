import React from 'react'
import { Motion, spring, presets} from "react-motion";

interface TransitionType {
    render: (style: Object) => React.ReactNode;
}
function TodoListTransition({render} : TransitionType) {
    return (
        <Motion
            defaultStyle={{
                opacity: 0,
                translateX: 900
            }}
            style={{
                opacity: spring(1),
                translateX: spring(0, presets.wobbly)
            }}
        >
            {
                interpolatedStyles => {
                    const style = {
                        transform: `translateX(${interpolatedStyles.translateX}px)`,
                        opacity: interpolatedStyles.opacity
                    };

                    return (
                        <React.Fragment>
                            {render(style)}
                        </React.Fragment>)
                }
            }
        </Motion>
        );
}

export {TodoListTransition};