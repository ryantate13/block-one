import get_blocks from './get_blocks';

function empty(){
    return {
        blocks: {},
        loading: false,
        error: null
    };
}

function reduce(state, event){
    switch(event.type){
        case 'get_blocks':
            return [{...state, loading: true}, get_blocks().then(blocks => ({type: 'blocks', blocks}))];
        case 'blocks':
            return [{
                ...state,
                loading: false,
                blocks: Object.entries(event.blocks).reduce((acc, [id, block]) => ({
                    ...acc,
                    [id]: {open: false, block}
                }), {})
            }];
        case 'error':
            return [{
                ...state,
                error: JSON.stringify(event.error, null, 4),
                loading: false
            }];
        case 'toggle_block':
            state.blocks[event.id].open = !state.blocks[event.id].open;
            return [{...state}];
        default:
            console.error('unmatched event', {event});
    }
    return [state];
}

export default {empty, reduce};