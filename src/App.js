
import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';
import HomePage from './Components/HomePage.js';
import ContactForm from './Components/ContactForm.js';
import AboutMe from './Components/AboutMe.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Link to="/#homepage" component={HomePage}>Home Page</Link>
        <Link to="/#aboutme" component={AboutMe} />
        <Link to="/#contactform" component={ContactForm} />
      </div>
      </Router>
    );
  }
}
 
export default App