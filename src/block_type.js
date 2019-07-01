import PropTypes from "prop-types";

export default PropTypes.shape({
    timestamp: PropTypes.string.isRequired,
    producer: PropTypes.string,
    confirmed: PropTypes.number,
    previous: PropTypes.string,
    transaction_mroot: PropTypes.string,
    action_mroot: PropTypes.string,
    schedule_version: PropTypes.number,
    new_producers: PropTypes.any,
    header_extensions: PropTypes.array,
    producer_signature: PropTypes.string,
    transactions: PropTypes.array,
    block_extensions: PropTypes.array,
    id: PropTypes.string.isRequired,
    block_num: PropTypes.number,
    ref_block_prefix: PropTypes.number
});