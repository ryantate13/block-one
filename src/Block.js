import React from 'react'
import PropTypes from 'prop-types';
import block_type from './block_type';
import './Block.scss';

export default function Block({block, open, dispatch}){
    return <div className={'block'}>
        <div className="info">
            <div className="stats">
                <div className={'hash'}><b>Hash:</b> {block.id}</div>
                <div className={'timestamp'}><b>Timestamp:</b> {block.timestamp}</div>
                <div className={'transactions'}><b>Action Count:</b> {block.transactions.length}</div>
            </div>
            <div
                className={'toggle'}
                onClick={() => dispatch({type: 'toggle_block', id: block.id})}
                title={'View Raw Block'}
            >
                {open ? '➖' : '➕'}
            </div>
        </div>
        <div className={`raw ${open ? 'open' : ''}`}>
            <pre><code>{JSON.stringify(block, null, 4)}</code></pre>
        </div>
    </div>
}

Block.propTypes = {
    block: block_type.isRequired,
    open: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};