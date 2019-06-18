
import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import HomePage from './Components/HomePage.js';
import ContactForm from './Components/ContactForm.js';
import AboutMe from './Components/AboutMe.js';
import NavBar from './Components/NavBar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar/>
        <HomePage/>
        <AboutMe/>
        <ContactForm/>
      </div>
      </Router>
    );
  }
}
 
export default App