export default function is_promise(thing){
    return thing.then && typeof thing.then === 'function';
}
