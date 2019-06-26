
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/HomePage.js';
import About from './Components/About.js';
import Portfolio from './Components/Portfolio.js';
import Contact from './Components/Contact.js';

class App extends Component {
  render() {
    return (
      <div className='navbar'>
        <Router>
          <div className='routes'>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App