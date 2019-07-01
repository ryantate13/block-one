import is_promise from './is_promise';

export default function (setState, reducer) {
    const dispatch = event => setState(state => {
        const [new_state, future_event] = reducer(state, event);

        if (future_event && is_promise(future_event))
            Promise.resolve(future_event)
                .then(dispatch)
                .catch(error => dispatch({type: 'error', error}));

        return new_state;
    });

    return dispatch;
}
