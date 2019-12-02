import React from 'react';
import Home from '../home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../common/navbar/Navbar';

import './RoutingComponent.css';
import SinglePost from '../posts/single/SinglePost';

const RouterComponent = () => {
    return (
        <Router>
            <Navbar/>
            <Route exact path="/" component={Home} />
            <Route path="/posts/:id" component={SinglePost} />
        </Router>
    );
};
 
export default RouterComponent;