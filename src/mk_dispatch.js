import is_promise from './is_promise';

export default function (setState, reducer) {
    const dispatch = event => setState(state => {
        const new_state = reducer(state, event);
        if(is_promise(new_state)){
            Promise.resolve(new_state).then(dispatch);
            return null;
        }
        return new_state;
    });

    return dispatch;
}
