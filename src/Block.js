import React from 'react'
import PropTypes from 'prop-types';
import block_type from './block_type';
import styles from './Block.module.scss';

export default function Block({block, open, dispatch}) {
    return <div className={styles.block}>
        <div className={styles.info}>
            <div className={styles.stats}>
                <div className={styles.hash}><b>Hash:</b> {block.id}</div>
                <div className={styles.timestamp}><b>Timestamp:</b> {block.timestamp}</div>
                <div className={styles.transactions}><b>Action Count:</b> {block.transactions.length}</div>
            </div>
            <div
                className={styles.toggle}
                onClick={() => dispatch({type: 'toggle_block', id: block.id})}
                title={'View Raw Block'}
            >
                {open ? '➖' : '➕'}
            </div>
        </div>
        <div className={`${styles.raw} ${open ? styles.open : ''}`}>
            <pre><code>{JSON.stringify(block, null, 4)}</code></pre>
        </div>
    </div>
}

Block.propTypes = {
    block: block_type.isRequired,
    open: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};
