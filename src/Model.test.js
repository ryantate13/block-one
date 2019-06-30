import Model from './Model';
import mockConsole from 'jest-mock-console';

describe('Model', () => {
    it('creates an empty state object with the correct values', () => {
        const {blocks, loading} = Model.empty();
        expect(Object.keys(blocks).length).toBe(0);
        expect(loading).toBe(false);
    });

    it('logs an error on unmatched event types', () => {
        const restoreConsole = mockConsole();
        Model.reduce(Model.empty(), {type: 'asdasdasd'});
        expect(console.error).toHaveBeenCalled();
        restoreConsole();
    });
});
