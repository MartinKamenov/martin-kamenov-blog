import React from 'react';
import Home from '../home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../common/navbar/Navbar';

import './RoutingComponent.css';

const RouterComponent = () => {
    return (
        <Router>
            <Navbar/>
            <Route exact path="/" component={Home} />
        </Router>
    );
};
 
export default RouterComponent;