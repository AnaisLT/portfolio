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
          <br/><br/>
          <p>Hi! Welcome and nice to meet you!</p>
          <br/> 
          <p>I'm a junior full-stack developer with a particular 
            interest in visually appealing and user-friendly websites.</p>
          <br/>
          <p>I have a background in linguistic research, TESOL teaching, personal health and fitness,
            and the performing arts. I started learning coding online because I was fascinated by the inner working of websites and for 
            the sheer intellectual challenge it represented. As I delve deeper, I came to realise that web-development
            could be an ideal career path for me as it bridges creativity and analytical-thinking and is a field in constant
            evolution. So I took the plunge and signed up for the Kodiri bootcamp which I am due to complete soon.</p>
            <br/>
          <p>I am now looking for a position as a Junior Developer where I could further my skills and hone my craft. 
            Through my multidisciplinary and international studies and professional experiences, I have developed strong communication
            skills allowing me to articulate complex ideas. I have a knack for team work and love collaborating with people
            to materialise ideas. Having previously worked in customer-facing and teaching roles, I understand how to build
            trusting relationships with clients to help them achieve thei goals.  
            </p>
        </div>
      </div>
    </div>

  );
}
