import React from 'react';

import Model from './Model';
import useDispatch from './useDispatch';
import Header from './Header';
import Content from './Content';

import './App.scss';

function App() {
    const {state, dispatch} = useDispatch(Model.empty(), Model.reduce);

    return (
        <div id="app">
            <Header dispatch={dispatch} blocks={state.blocks} loading={state.loading} />
            <Content {...{...state, dispatch}} />
        </div>
    );
}

export default App;
