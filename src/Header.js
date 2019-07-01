import React from 'react';
import PropTypes from 'prop-types';
import block_type from './block_type';
import BlockLoader from "./BlockLoader";

export default function Header({blocks, dispatch, loading}) {
    const has_data = !!Object.keys(blocks).length;

    return <header>
        <div id="logo">
            block.one
        </div>
        {
            has_data && <BlockLoader {...{dispatch, loading, ghost: true}}/>
        }
    </header>
}

Header.propTypes = {
    blocks: PropTypes.objectOf(PropTypes.shape({
        open: PropTypes.bool.isRequired,
        block: block_type.isRequired
    })),
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};