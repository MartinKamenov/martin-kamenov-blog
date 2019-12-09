import React from 'react';
import RouterComponent from './components/routing/RouterComponent';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const apolloClient = new ApolloClient({
    uri: 'https://martin-kamenov-blog-api.herokuapp.com/graphql'
});

const App = () => (
    <ApolloProvider client={apolloClient}>
        <RouterComponent/>
    </ApolloProvider>
);

export default App;
