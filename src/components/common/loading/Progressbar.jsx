import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

const Progressbar = ({ message, color }) => (
    <div style={{
        margin: 'auto',
        width: '200px',
        height: '100px',
        textAlign: 'center'
    }} className='black-content'>
        <CircularProgress color={color || 'secondary'} />
        <div className='loading-message-text'>{message || 'Loading'}</div>
    </div>
);

Progressbar.propTypes = {
    message: PropTypes.string,
    color: PropTypes.string
};
 
export default Progressbar;