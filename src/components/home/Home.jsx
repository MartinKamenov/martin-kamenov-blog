import React from 'react';

import './Home.css';

import PostList from '../posts/PostsList';

const Home = () => {
    return (
        <div className='container'>
            <PostList/>
        </div>
    );
};
 
export default Home;