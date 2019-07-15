import React from 'react';
import './Contact.scss';
import GmailLogo from '../images/gmail-icon.png';
import LinkedInLogo from '../images/linkedin-icon.png';
import GitHubLogo from '../images/github-icon.png';

export default function Contact() {
  return (
    <div>
      <div className='contact-section'>
        <h1 className="title">Get in touch!</h1>
      </div>
      <div className='contact-container'>
        <div className='contact-item'>
          <img src={GmailLogo} className='contactImg' alt='Gmail icon' />
        </div>
        <div className='contact-item'>
          <img src={LinkedInLogo} className='contactImg' alt='LinkedIn icon' />
        </div>
        <div className='contact-item'>
          <img src={GitHubLogo} className='contactImg' alt='GitHub icon' />
        </div>
      </div>
    </div>
  );
}
