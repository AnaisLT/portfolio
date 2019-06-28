import React from 'react';
import ProfilePic from '../images/ProfilePic.jpg';
import './About.css';

export default function About() {
    return (
      <>
      <div>
        <h1 className='title'>Get to know me!</h1>
      </div>  
      <div className='portfoliopic'>
        <img
          src={ProfilePic}
          alt='My profile pic'>
        </img>    
      </div>
      </>
    )
  }

