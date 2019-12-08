import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';

import './Footer.css';
import './SocialButtons.css';

const Footer = () => {
    return (
        <nav className='social-btn-container'>
            <div className="social-btns">
                <h3>Find me on social media</h3>
                <a className="btn facebook" href="https://www.facebook.com/martykam"><FaFacebook className="fa fa-facebook"/></a>
                <a className="btn twitter" href="https://twitter.com"><FaTwitter className="fa fa-twitter"/></a>
                <a className="btn google" href="mailto:martinkamenov10@gmail.com"><FaGoogle className="fa fa-google"/></a>
            </div>
        </nav>
    );
}
 
export default Footer;