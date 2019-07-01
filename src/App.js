import React, {useState} from 'react';

import Model from './Model';
import mk_dispatch from './mk_dispatch';
import Header from './Header';
import Content from './Content';

import './App.scss';

let dispatch;

function App() {
    const [state, setState] = useState(Model.empty());

    dispatch = mk_dispatch(setState, Model.reduce);

    return (
        <div id="app">
            <Header dispatch={dispatch} blocks={state.blocks} loading={state.loading} />
            <Content {...{...state, dispatch}} />
        </div>
    );
}

export default App;
