import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Components/HomePage.css';
import AnimateTitle from './AnimateTitle.js';

class Home extends Component {

  componentDidMount() {
    AnimateTitle();
  }

  render() {
    return (
      <>
        <div id='main-container'>
          <div id='container1'>
            <div id='name'>
              <span class='logo'>
                <span id="h" class='letter'>H</span>
                <span id="e" class='letter'>E</span>
                <span id="l" class='letter'>L</span>
                <span id="l" class='letter'>L</span>
                <span id="o" class='letter'>0</span>
              </span>
              <span class='logo'>
                <span id="i" class='letter'>I</span>
                <span id="apos" class='letter'>'</span>
                <span id="m" class='letter'>M </span>
                <span id="a" class='letter'> A</span>
                <span id="n" class='letter'>N</span>
                <span id="a" class='letter'>A</span>
                <span id="i" class='letter'>I</span>
                <span id="s" class='letter'>S</span>
              </span>
            </div>
          </div>
          <div>
            <p>Create.Learn.Code.Repeat</p>
          </div>
          <div id='container2'>
            <div id='links'>
              <Link to='/about'>
                Let's break the ice
            </Link>
              <Link to='/projects'>
                Check my work
            </Link>
              <Link to='/contact'>
                Say "Hi!"
            </Link>
            </div>
          </div>
        </div >
      </>
    );
  }
}

export default Home