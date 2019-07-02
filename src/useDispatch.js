import {useState} from 'react';
import is_promise from './is_promise';

/**
 * Hook to return state and async-ready dispatch function
 * @param {object} initial_state
 * @param {function} reducer
 */
export default function useDispatch(initial_state, reducer){
    const [state, setState] = useState(initial_state),
        dispatch = event => setState(state => {
            const [new_state, future_event] = reducer(state, event);

            if (future_event && is_promise(future_event))
                Promise.resolve(future_event)
                    .then(dispatch)
                    .catch(error => dispatch({type: 'error', error}));

            return new_state;
        });

    return {state, dispatch};
}
