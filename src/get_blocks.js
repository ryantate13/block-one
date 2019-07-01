import {JsonRpc} from 'eosjs';

const block_chain = 'https://api.eosnewyork.io',
    wait = () => new Promise(r => setTimeout(r, 1000));

export default async function get_blocks() {
    const rpc = new JsonRpc(block_chain, {fetch}),
        blocks = {};

    let blocks_info = null;
    while(!blocks_info){
        blocks_info = await fetch(`${block_chain}/v1/chain/get_info`).then(r => r.json()).catch(() => null);
        await wait();
    }

    let {head_block_num} = blocks_info,
        block_num_mapper = (_, i) => head_block_num - i;

    while (Object.keys(blocks).length < 10) {
        const new_blocks = Array(10).fill(0).map(block_num_mapper),
            requests = await Promise.all(new_blocks.map(num => rpc.get_block(num).catch(() => null)));

        const valid = requests.filter(r => r);

        valid.forEach(block => blocks[block.id] = block);

        head_block_num = new_blocks[new_blocks.length - 1] - 1;

        await wait();
    }

    return Object.entries(blocks).slice(0, 10).reduce((acc, [id, block]) => ({...acc, [id]: block}), {});
}
