import Model from './Model';
import mockConsole from 'jest-mock-console';
import blockchain_timeout from './blockchain_timeout';

jest.setTimeout(blockchain_timeout);

describe('Model', () => {
    it('creates an empty state object with the correct values', () => {
        const {blocks, loading} = Model.empty();
        expect(Object.keys(blocks).length).toBe(0);
        expect(loading).toBe(false);
    });

    it('logs an error on unmatched event types', () => {
        const restoreConsole = mockConsole();
        Model.reduce({}, {});
        expect(console.error).toHaveBeenCalled();
        restoreConsole();
    });

    it('fetches blocks and sets loading state', () => {
        const [state, future_state] = Model.reduce(Model.empty(), {type: 'get_blocks'});
        return future_state.then(event => {
            expect(state.loading).toBe(true);
            expect(event.type).toBe('blocks');
            expect(Object.keys(event.blocks).length).toBe(10);
        });
    });

    it('sets blocks with default open state and resets loading state', () => {
        const id = 'foo',
            [state] = Model.reduce({...Model.empty(), loading: true}, {type: 'blocks', blocks: {[id]: id}});
        expect(state.loading).toBe(false);
        expect(Object.keys(state.blocks)[0]).toBe(id);
        expect(state.blocks[id].open).toBe(false);
    });

    it('handles error events', () => {
        const [state] = Model.reduce(Model.empty(), {type: 'error', error: true});
        expect(state.error).toBe('true');
    });

    it('toggles block open state', () => {
        const [state] = Model.reduce({...Model.empty(), blocks: {0: {open: false}}}, {type: 'toggle_block', id: 0});
        expect(state.blocks[0].open).toBe(true);
    });
});
