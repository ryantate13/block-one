import is_promise from './is_promise';

test('can tell whether something is a promise', () => {
    expect(is_promise('foo')).toBeFalsy();
    expect(is_promise(new Promise(() => {}))).toBe(true);
});
