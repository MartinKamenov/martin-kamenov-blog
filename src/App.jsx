import React from 'react';
import RouterComponent from './components/routing/RouterComponent';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import uuid from 'uuid';

let token = localStorage.getItem('likes-token');
if(!token) {
    token = uuid.v1();
    localStorage.setItem('likes-token', token);
}

const reducer = (state = { token }, action) => {
    const stateCopy = {...state};
    switch(action.type) {
        default:
            return stateCopy;
    }
};

const store = createStore(reducer);

const apolloClient = new ApolloClient({
    uri: 'https://martin-kamenov-blog-api.herokuapp.com/graphql'
});

const App = () => (
    <Provider store={store}>
        <ApolloProvider client={apolloClient}>
            <RouterComponent/>
        </ApolloProvider>
    </Provider>
);

export default App;
