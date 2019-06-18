
import React from 'react';
import './App.css';
import HomePageCover from './images/HomePageCover.jpg';

function App() {
  return (
    <div className="App">
        <h1>Front End Developer</h1>
      <img src={HomePageCover} alt='My favourite place'/>
      <p>Want to know more or have an idea you want to turn into reality?</p>
      <button>Contact Me</button>
    </div>
  );
}

export default App;
