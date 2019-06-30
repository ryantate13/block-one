import mk_dispatch from './mk_dispatch';

const mock = 'foo',
    setState = jest.fn(fn => fn(mock)),
    reducer = jest.fn((state, event) => event.type === 'async' ? Promise.resolve(mock) : mock);

let dispatch;

it('generates an asynchronous event dispatcher', () => {
    dispatch = mk_dispatch(setState, reducer);
    expect(typeof dispatch).toBe('function');
});

it('dispatch function can handle synchronous events', () => {
    dispatch({type: 'sync'});
    expect(typeof setState.mock.calls[0][0]).toBe('function');
    expect(setState.mock.calls.length).toBe(1);
});

it('dispatch function can handle asynchronous events', () => {
    dispatch({type: 'async'});
    return new Promise(r => r(setState.mock.calls))
        .then(calls => expect(calls.length).toBe(3));
});
