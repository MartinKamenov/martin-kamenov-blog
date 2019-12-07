import React from 'react';
import Home from '../home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SinglePost from '../posts/single/SinglePost';
import AboutMe from '../about-me/AboutMe';

import './RoutingComponent.css';
import PostList from '../posts/PostsList';
import CustomNavbar from '../common/navbar/CustomNavbar';

const RouterComponent = () => {
    return (
        <Router>
            <CustomNavbar/>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={PostList} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route path="/posts/:id" component={SinglePost} />
        </Router>
    );
};
 
export default RouterComponent;