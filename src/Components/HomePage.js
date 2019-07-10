import React, { Component } from "react";
import "../Components/HomePage.css";
import '../App.css'

import AnimateTitle from "./AnimateTitle.js";

class Home extends Component {
  componentDidMount() {
    AnimateTitle();
  }

  render() {
    return (
      <div id="home" className="section">
        <div id="main-container">
          <div id="container1">
            <div id="name">
              <span className="logo">
                <span id="h" className="letter">
                  H
                </span>
                <span id="e" className="letter">
                  E
                </span>
                <span id="l" className="letter">
                  L
                </span>
                <span id="l" className="letter">
                  L
                </span>
                <span id="o" className="letter">
                  0
                </span>
              </span>
              <span className="logo">
                <span id="i" className="letter">
                  I
                </span>
                <span id="apos" className="letter">
                  '
                </span>
                <span id="m" className="letter">
                  M{" "}
                </span>
                <span id="a" className="letter">
                  {" "}
                  A
                </span>
                <span id="n" className="letter">
                  N
                </span>
                <span id="a" className="letter">
                  A
                </span>
                <span id="i" className="letter">
                  I
                </span>
                <span id="s" className="letter">
                  S
                </span>
              </span>
            </div>
          </div>
          <div>
            <p>Create.Learn.Code.Repeat</p>
          </div>
          <div id="container2">
            <div id="links">
              <a href="#about" rel="noreffer nooppener">
                Let's break the ice
              </a>
              <a href="#projects" rel="noreffer nooppener">
                Check my work
              </a>
              <a href="#contact" rel="noreffer nooppener">
                Say "Hi!"
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
