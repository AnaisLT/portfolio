import React from 'react';
import HomePageCover from '../images/HomePageCover.jpg';
import './HomePage.css';

export default function Home() {
  return (
      <div className='Home'>
        <h1 className='title'>Front End Developer in the making</h1>
        <img className='cover' src={HomePageCover} alt='My favourite place' />
        <h2 className='subtitle'>
          Want to know more or have an idea you want to turn into reality?
        </h2>
        <button className='contact'>Contact Me</button>
      </div>
  );
}