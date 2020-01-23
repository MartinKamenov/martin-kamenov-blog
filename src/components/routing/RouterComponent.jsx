import React, { useState } from 'react';
import Home from '../home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SinglePost from '../posts/single/SinglePost';
import AboutMe from '../about-me/AboutMe';

import './RoutingComponent.css';
import PostList from '../posts/PostsList';
import CustomNavbar from '../common/navbar/CustomNavbar';
import Footer from '../common/footer/Footer';
import ModeContext from '../../contexts/ModeContext';

const RouterComponent = () => {
    const [isChecked, onSwitch] = useState(false);

    const toggleSwitch = () => {
        document.body.style.background = !isChecked ? '#212020' : 'white';
        onSwitch(!isChecked);
    }

    
    return (
        <ModeContext.Provider value={{ mode: isChecked ? 'night': 'day'}}>
            <Router>
                <CustomNavbar isChecked={isChecked} toggleSwitch={toggleSwitch}/>
                <Route exact path="/" component={Home} />
                <div className={`container-${isChecked ? 'night': 'day'}-mode`}>
                    <Route exact path="/posts" component={PostList} />
                    <Route exact path="/aboutme" component={AboutMe} />
                    <Route path="/posts/:id" component={SinglePost} />
                </div>
                <Footer/>
            </Router>
        </ModeContext.Provider>
    );
};
 
export default RouterComponent;