
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './Components/HomePage.js'
import ContactForm from './Components/ContactForm.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path='/' component={HomePage} />
        <Route exact path='/contactform' component={ContactForm} />
      </div>
      </Router>
    );
  }
}
 
export default App