import React from 'react';
import  HTMLLogo from '../images/html5-icon.png';
import  CSSLogo from '../images/css3-icon.png';
import JavaScriptLogo from '../images/javascript-icon.png';
import  ReactLogo from '../images/react-icon.png';
import  NodeJSLogo from '../images/nodejs-icon.png';
import  GitLogo from '../images/git-icon.png';
import './Skills.scss';

export default function Skills() {
    return (
        <div>
            <div className='skills-section'>
                <h1>Technical skills</h1>
                <div className='skills-container'>
                    <div className='skills-item'>
                    <img src={HTMLLogo} className='techImg' alt='HTML icon' />
                    <label>HTML5</label>
                    </div>
                    <div className='skill-item'>
                    <img src={CSSLogo} className='techImg' alt='CSS icon' />
                    <label>CSS3</label>
                    </div>
                    <div className='skill-item' >
                    <img src={JavaScriptLogo} className='techImg' alt='JS icon' />
                    <label>JavaScript</label>
                    </div>
                    <div className='skill-item' >
                    <img src={ReactLogo} className='techImg' alt='React icon' />
                    <label>React</label>
                    </div>
                    <div className='skill-item' >
                    <img src={NodeJSLogo} className='techImg' alt='Node.js icon' />
                    <label>Node.js</label>
                    </div>
                    <div className='skill-item' >
                    <img src={GitLogo} className='techImg' alt='Git icon' />
                    <label>Git</label>
                    </div>
                </div>
            </div>
        </div>
    );
}