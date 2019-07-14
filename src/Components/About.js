import React from 'react';
import ProfilePic from '../images/ProfilePic.jpg';
import './About.scss';
import '../App.css'

export default function About() {
  return (
    <div id="about" className="section">
      <h1 className="title">Let's break the ice</h1>
      <div className="portfoliopic">
        <img src={ProfilePic} alt="My profile pic" />
      </div>
    </div>
  );
}
