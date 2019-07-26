import React from 'react';
import Kodflix from '../images/Kodflix.jpeg';
import './Projects.scss';
import '../App.css'

export default function Projects() {
  return (
    <div>
      <div className='projects-section'>
        <h1 className='title'>This is my work</h1>
        <div className='projects-container'>
          <div className='projects-card'>
            <img src={Kodflix} className='prj-img' alt='Kodflix' />
            <div className='description'>
              <p>Kodflix</p>
              <p>A Netflix inspired full-stack application.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}