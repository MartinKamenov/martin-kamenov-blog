import React, { useState, useEffect } from 'react';
import Home from '../home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SinglePost from '../posts/single/SinglePost';
import AboutMe from '../about-me/AboutMe';

import './RoutingComponent.css';
import PostList from '../posts/PostsList';
import CustomNavbar from '../common/navbar/CustomNavbar';
import ModeContext from '../../contexts/ModeContext';

const RouterComponent = () => {
    const [isChecked, setChecked] = useState(false);

    const toggleSwitch = () => {
        const newValue = !isChecked;
        localStorage.setItem('mode', newValue ? 'night' : 'day');
        document.body.style.background = newValue ? '#212020' : 'white';
        setChecked(newValue);
    };

    useEffect(() => {
        const mode = localStorage.getItem('mode');
        const initialChecked = (mode === 'night');
        document.body.style.background = initialChecked ? '#212020' : 'white';
        setChecked(initialChecked);
    }, []);

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
            </Router>
        </ModeContext.Provider>
    );
};
 
export default RouterComponent;