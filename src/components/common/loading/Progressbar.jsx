import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

const Progressbar = ({ message, color }) => (
    <div style={{
        margin: 'auto',
        width: '200px',
        height: '100px',
        textAlign: 'center'
    }} className='black-content'>
        <CircularProgress color={color || 'secondary'} />
        <div>{message || 'Loading'}</div>
    </div>
);
 
export default Progressbar;