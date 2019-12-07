import React from 'react';
import PropTypes from 'prop-types';

const Company = ({ company }) => {
    return (
        <div className='col-md-4 col-sm-6 company-container'>
            <h4 className='company-name'>{company.name}</h4>
            <img
                alt='company-logo'
                className='company-logo'
                src={company.imageUrl}/>
            <div className='company-info'>
                {company.description.split('\n').map((li, i) => (
                    <li key={i}>{li}</li>
                ))}
            </div>
        </div>
    );
};

Company.propTypes = {
    company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};
 
export default Company;