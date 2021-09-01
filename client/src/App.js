import React from 'react';
import Header from './components/header/header.js';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Footer from './components/footer.js'
import '../src/App.css'
import Dashboard from './pages/Dashboard.js'
import Login from './pages/Login.js'
import CreateEvent from './pages/CreateEvent.js'
import NavBar from './pages/NavBar.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Dashboard />
      <Footer />
    </div>
  )
}
<Router>
  <Switch>
    <Route path='../Login' component={Login} />
    <Route path='./pages/CreateEvent.js' component={CreateEvent} />

  </Switch>
</Router>
export default App;
