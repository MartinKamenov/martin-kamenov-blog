import React, { useContext } from 'react';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import ModeContext from '../../../contexts/ModeContext';
import PropTypes from 'prop-types';

import './Footer.css';
import './SocialButtons.css';

const Footer = ({ hasMode }) => {
    const {mode} = useContext(ModeContext);

    return (
        <nav className={'social-btn-container slow-transition-container ' + 
            (hasMode ? `footer-container-${mode}-mode` : '')}>
            <div className='social-btns'>
                <h3 className={`footer-header-${mode}-mode`}>Find me on social media</h3>
                <a
                    className='btn facebook'
                    href='https://www.facebook.com/martykam'
                    rel='noopener noreferrer'
                    target='_blank'><FaFacebook className='fa fa-facebook'/></a>
                <a
                    className='btn twitter'
                    href='https://twitter.com/MartinKamenov3'
                    rel='noopener noreferrer'
                    target='_blank'><FaTwitter className='fa fa-twitter'/></a>
                <a
                    className='btn google' 
                    href='mailto:martinkamenov10@gmail.com?subject=Hello Martin&body=Hi.'
                    target='_blank' rel='noopener noreferrer'><FaGoogle className='fa fa-google'/></a>
            </div>
        </nav>
    );
};

Footer.propTypes = {
    hasMode: PropTypes.bool
};

export default Footer;