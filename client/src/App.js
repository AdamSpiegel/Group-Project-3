import React from 'react';
import Header from './components/header/header.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer.js'
import '../src/App.css'
import Dashboard from './pages/Dashboard.js'
import Login from './pages/Login.js'
import CreateEvent from './pages/CreateEvent.js'
import PlaySound from './components/playsound.js';
import Signup from '../src/pages/Signup.js'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Success from './pages/Success.js';
import Subscribe from './pages/Subscribe.js';
import Body from './components/body.js'
import './App.css'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/body" component={Body} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/subscribe" component={Subscribe} />
            <Route exact path="/CreateEvent" component={CreateEvent} />
            <Route exact path="/Signup" component={Signup} />
          </Switch>
          <PlaySound />
          <Footer />
        </div>
      </Router>
    </ApolloProvider>

  )
}

export default App;

