import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import './NavBar.css';

export default function NavBar () {
    return (
        <div className='navbar'>
        <Link to="/#homepage">Home Page</Link>
        <Link to="/#aboutme">About Me</Link>
        <Link to="/#contactform">Contact</Link>
        </div>
    );
}
 