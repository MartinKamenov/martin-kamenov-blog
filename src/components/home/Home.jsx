import React from 'react';
import Button from '@material-ui/core/Button';

import './Home.css';
import Footer from '../common/footer/Footer';

const Home = ({ history }) => {
    const navigateToBlog = () => {
        history.push('/posts');
    };

    const navigateToProfile = () => {
        history.push('/aboutme');
    };

    return (
        <>
            <div className='home-background-container'></div>
            <div className='home-container center-container slow-transition-container'>
                <h1 className='home-header'>My blog</h1>
                <Button onClick={navigateToBlog} variant="outlined" color='secondary'>
                    Blog posts
                </Button>
                <Button onClick={navigateToProfile} variant="outlined" color='secondary'>
                    My profile
                </Button>
            </div>
            <Footer/>
        </>
    );
};
 
export default Home;