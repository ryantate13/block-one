import React from 'react';
import {act} from 'react-dom/test-utils';
import useDispatch from './useDispatch';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const initial_state = {
        count: 1
    },
    reducer = (state, event) => {
        switch (event.type) {
            case 'sync':
                return [{count: ++state.count}];
            case 'async':
                return [state, Promise.resolve({type: 'sync'})];
            case 'error':
                return [{...state, error: event.error}];
            default:
                return [state, new Promise((_, reject) => reject('This should throw'))];
        }
    },
    TestHook = () => {
        const {state, dispatch} = useDispatch(initial_state, reducer);
        return <div>
            <button id="sync" onClick={() => dispatch({type: 'sync'})}/>
            <button id="async" onClick={() => dispatch({type: 'async'})}/>
            <button id="throw" onClick={() => dispatch({type: 'throw'})}/>
            {state.error && <div id="error">{JSON.stringify(state.error)}</div>}
            <span>{state.count}</span>
        </div>
    };

/**
 * This logs a bunch of ugly errors to the console :(
 * Fix is landing in 16.9
 * https://github.com/facebook/react/issues/15379
 */
describe('useDispatch', () => {
    it('can handle synchronous events', () => {
        const wrapper = mount(<TestHook/>);
        expect(wrapper.text()).toBe('1');
        act(() => {
            wrapper.find('#sync').simulate('click');
        });
        expect(wrapper.text()).toBe('2');
    });

    it('can handle asynchronous events', async () => {
        act(async () => {
            const wrapper = mount(<TestHook/>);
            expect(wrapper.text()).toBe('2');
            wrapper.find('#async').simulate('click');
            await Promise.resolve();
            expect(wrapper.text()).toBe('3');
        });
    });

    it('can catch error events', async () => {
        act(async () => {
            const wrapper = mount(<TestHook/>);
            expect(wrapper.find('#error').length).toBe(0);
            wrapper.find('#throw').simulate('click');
            await Promise.resolve();
            expect(wrapper.find('#error').length).toBe(1);
            console.log(wrapper.text());
        });
    });
});
