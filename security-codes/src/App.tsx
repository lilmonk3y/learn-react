import React from 'react';
import './App.css';
import {UseState} from "./UseState";
import {ClassState} from "./ClassState";
import {UseReducer} from "./UseReducer";
import {ComponentSection} from "./ComponentSection";

function App() {
  return (
    <div className="App">
        {
            [ClassState, UseState, UseReducer].map(Component => (
                <ComponentSection name={`${Component.name}`}>
                    <Component/>
                </ComponentSection>
            ))
        }
    </div>
  );
}

export default App;
