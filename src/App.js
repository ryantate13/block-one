import React, {useState} from 'react';
import Model from './Model';
import './App.scss';

import BlockLoader from './BlockLoader';
import mk_dispatch from './mk_dispatch';

let dispatch;

function App() {
    const [state, setState] = useState(Model.empty());

    dispatch = mk_dispatch(setState, Model.reduce);

    return (
        <div id="app">
            <header>
                <div id="logo">
                    block.one
                </div>
            </header>
            <div id="content">
                <BlockLoader dispatch={dispatch} loading={state.loading} />
            </div>
        </div>
    );
}

export default App;
