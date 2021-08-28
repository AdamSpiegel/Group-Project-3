import React from 'react';

import Header from '../src/components/header/header.js';
import Success from '../src/pages/Success.js';
import Subscribe from '../src/pages/Subscribe.js';

import Header from './components/header/header.js';
import Body from './components/body.js'
import Footer from './components/footer.js'
import '../src/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
export default App;


// /sucCessRoute - Need to trigger success.js page
