import React from 'react';

const Company = ({ company }) => {
    return (
        <div className='col-md-4 col-sm-6 company-container'>
            <h4 className='company-name'>{company.name}</h4>
            <img
                alt='company-logo'
                className='company-logo'
                src={company.imageUrl}/>
            <div className='company-info'>
                {company.description}
            </div>
        </div>
    );
};
 
export default Company;