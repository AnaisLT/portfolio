
import React, { Component } from 'react';
import HomePage from './Components/HomePage.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';

class App extends Component {
  render() {
    return (
      <>
        <HomePage />
        <About />
        <Projects />
        <Contact />
      </>
    );
  }
}

export default App