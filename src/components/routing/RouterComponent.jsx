import React from 'react';
import Home from '../home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../common/navbar/Navbar';

import SinglePost from '../posts/single/SinglePost';
import AboutMe from '../about-me/AboutMe';

import './RoutingComponent.css';

const RouterComponent = () => {
    return (
        <Router>
            <Navbar/>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route path="/posts/:id" component={SinglePost} />
        </Router>
    );
};
 
export default RouterComponent;