import React from 'react';
import ProfilePic from '../images/ProfilePic.jpg';

export default function About() {
    return (
      <>
      <div>
        <h1 className='title'>Get to know me!</h1>
      </div>  
      <div>
        <img
          src={ProfilePic}
          alt='My profile pic' />    
      </div>
      </>
    )
  }

