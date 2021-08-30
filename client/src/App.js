import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Header from '../src/components/header/header.js';
import Success from '../src/pages/Success.js';
import Subscribe from './src/pages/Subscribe.js';
import Login from '../src/pages/Login.js';
import Body from './components/body.js'
import Footer from './components/footer.js'
import '../src/App.css'
import Dashboard from './pages/Dashboard';


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
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/subscribe" component={Subscribe} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  )
}
export default App;

