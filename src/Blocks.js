import React from 'react';
import PropTypes from 'prop-types';
import block_type from './block_type';
import Block from './Block';
import style from './Blocks.module.scss';

export default function Blocks({blocks, dispatch}) {
    return <div className={style.blocks}>
        <h1>Latest Blocks</h1>
        <div>
            {Object.entries(blocks).map(([id, {open, block}]) => <Block {...{key: id, block, open, dispatch}} />)}
        </div>
    </div>
}

Blocks.propTypes = {
    blocks: PropTypes.objectOf(PropTypes.shape({
        open: PropTypes.bool.isRequired,
        block: block_type.isRequired
    })),
    dispatch: PropTypes.func.isRequired
};