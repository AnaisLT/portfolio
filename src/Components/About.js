import React from 'react';
import ProfilePic from '../images/ProfilePic.jpg';
import './About.scss';
import '../App.css'

export default function About() {
  return (
    <div id="about" className="section">
      <h1 className="title">Let's break the ice</h1>
      <div className='introduction'>
        <div className="portfoliopic">
          <img src={ProfilePic} alt="My profile pic" />
        </div>
        <div className='bio'>
          <br /><br />
          <p>Hi! Welcome and nice to meet you!</p>
          <br />
          <p>I'm a junior full-stack developer with a particular
            interest in visually appealing and user-friendly websites.</p>
          <br />
          <p>My enthusiam for coding stems from that it bridges creativity and
            problem-solving. The intricacy and constant evolution of software 
            development allows me to utilise the intellectual resourfulness and 
            adaptability developed through my multidisciplinary and international 
            studies and work. I am driven and committed to further my skills in 
            turning complex problems into clean and maintainable code. 
            I love working collaboratively with others to materialise ideas.
            When I'm not programming, you'll find me working out in the park on 
            gymnastic rings (or monkeying around), training in boxing, 
            Kali (a Filipino martial arts involving sticks or knives techniques), 
            Wudang Martial arts, doing yoga, running, or lost in a good book drinking 
            an oat flat white.
            </p>
      </div>
    </div>
    </div >

  );
}
