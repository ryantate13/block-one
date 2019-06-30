import React from 'react';
import PropTypes from 'prop-types';
import {button} from './BlockLoader.module.scss';

export default function BlockLoader({dispatch, loading}){
    return <button className={button} onClick={() => dispatch({type: 'load_data'})} disabled={loading}>
        Load Blocks
    </button>;
}

BlockLoader.propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};
