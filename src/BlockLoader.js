import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import style from './BlockLoader.module.scss';

export default function BlockLoader({dispatch, loading, ghost}){
    return <button
        className={`${style.button} ${ghost ? style.ghost : ''}`}
        onClick={() => dispatch({type: 'get_blocks'})}
        disabled={loading}>
        Load Blocks {loading && <Loading />}
    </button>;
}

BlockLoader.propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    ghost: PropTypes.bool
};
