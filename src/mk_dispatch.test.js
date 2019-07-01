import mk_dispatch from './mk_dispatch';

const mock_state = 'foo',
    reducer = jest.fn((state, event) => {
        switch (event.type) {
            case 'async':
                return [state, Promise.resolve(mock_state)];
            case 'async_error':
                return [state, new Promise((_, reject) => reject(mock_state))];
            default:
                return [mock_state];
        }
    }),
    setState = jest.fn(fn => fn(mock_state)),
    dispatch = jest.fn(mk_dispatch(setState, reducer));

describe('mk_dispatch function', () => {
    it('generates an asynchronous event dispatcher', () => {
        expect(typeof dispatch).toBe('function');
    });

    it('can handle synchronous events', () => {
        dispatch({type: 'sync'});
        expect(typeof setState.mock.calls[0][0]).toBe('function');
        expect(setState.mock.calls.length).toBe(1);
        setState.mockClear();
    });

    it('can handle asynchronous events', () => {
        dispatch({type: 'async'});
        return new Promise(r => r(setState.mock.calls))
            .then(calls => expect(calls.length).toBe(2))
            .then(setState.mockClear);
    });
});