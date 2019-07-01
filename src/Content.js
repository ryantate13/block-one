import React from 'react';
import PropTypes from "prop-types";
import block_type from "./block_type";
import Blocks from "./Blocks";
import BlockLoader from "./BlockLoader";

export default function Content({dispatch, blocks, loading, error}){
    const has_data = !!Object.keys(blocks).length;

    return <div id="content">
        {
            has_data
                ?
                <Blocks dispatch={dispatch} blocks={blocks} />
                :
                <BlockLoader dispatch={dispatch} loading={loading} />
        }
        {
            error && <div className="error">
                <h1>An Error Occurred</h1>
                <h4>Details:</h4>
                <pre><code>{JSON.stringify(error, null, 4)}</code></pre>
            </div>
        }
    </div>
}

Content.propTypes = {
    dispatch: PropTypes.func.isRequired,
    blocks: PropTypes.objectOf(PropTypes.shape({
        open: PropTypes.bool.isRequired,
        block: block_type.isRequired
    })),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};