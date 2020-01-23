import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Switch from '../../common/switch/Switch';
import './CustomButtonStyle.css';
import modeType from './modeType';
import ModeContext from '../../../contexts/ModeContext';

const CustomNavbar = ({ isChecked, toggleSwitch }) => {
    const { mode } = useContext(ModeContext);
    return (
        <div className={`navbar-container navbar-container-${mode}-mode`}>
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
                        <img
                            alt='mode'
                            className='mode-img'
                            width={35}
                            height={35}
                            src={modeType.getModeImage(isChecked)}></img>
                        <Switch isChecked={isChecked} onSwitch={toggleSwitch} />
                    </div>
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