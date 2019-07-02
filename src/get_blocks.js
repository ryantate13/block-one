import {JsonRpc} from 'eosjs';

const block_chain = 'https://api.eosnewyork.io',
    wait = ms => new Promise(r => setTimeout(r, ms)),
    id = i => i;

export default async function get_blocks() {
    const rpc = new JsonRpc(block_chain, {fetch}),
        blocks = {};

    let blocks_info = null;
    while(!blocks_info){
        blocks_info = await fetch(`${block_chain}/v1/chain/get_info`).then(r => r.json()).catch(() => null);
        await wait(1000);
    }

    let {head_block_num} = blocks_info;

    while (Object.keys(blocks).length < 10) {
        const new_block = await rpc.get_block(head_block_num).catch(() => null);

        [new_block].filter(id).forEach(block => blocks[block.id] = block);

        --head_block_num;

        await wait(10);
    }

    return blocks;
}
