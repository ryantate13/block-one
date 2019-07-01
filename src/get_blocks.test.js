import fetch from 'node-fetch';
import get_blocks from './get_blocks';
import blockchain_timeout from './blockchain_timeout';
import Type from 'variable-type';

global.fetch = fetch;

const block_type = Type.shape({
    timestamp: Type.string,
    producer: Type.string,
    confirmed: Type.number,
    previous: Type.string,
    transaction_mroot: Type.string,
    action_mroot: Type.string,
    schedule_version: Type.number,
    new_producers: Type.any,
    header_extensions: Type.array,
    producer_signature: Type.string,
    transactions: Type.array,
    block_extensions: Type.array,
    id: Type.string,
    block_num: Type.number,
    ref_block_prefix: Type.number
});

jest.setTimeout(blockchain_timeout);

describe('get_blocks', () => {
    it('gets the last 10 valid blocks from the block chain', () => {
        return get_blocks().then(blocks => {
            expect(Object.keys(blocks).length).toBe(10);
            expect(Object.values(blocks).every(block => block_type.check(block))).toBe(true);
        });
    });
});