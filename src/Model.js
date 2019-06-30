function empty(){
    return {
        blocks: {},
        loading: false
    };
}

function reduce(state, event){
    switch(event.type){
        default:
            console.error('unmatched event', {event});
    }
    return state;
}

export default {empty, reduce};
