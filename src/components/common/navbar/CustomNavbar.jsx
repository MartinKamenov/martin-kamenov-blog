import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import './CustomButtonStyle.css';

const CustomNavbar = () => {
    return (
        <div className='navbar-container'>
            <div className='left-navbar-container'>
                <Link style={{ textDecoration: 'none' }} className='navbar-element' to='/'>
                    <h4 className='nav-text btn-5'>
                        Martin's blog
                    </h4>
                </Link>
            </div>
            <div className='right-navbar-container'>
                <div className='nav'>
                    <div style={{ height: 40 }}>
                        <Link to='/posts' style={{ textDecoration: 'none' }}>
                            Posts
                        </Link>
                    </div>
                    <div style={{ height: 40 }}>
                        <Link to='/aboutme' style={{ textDecoration: 'none' }}>
                            About Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default CustomNavbar;