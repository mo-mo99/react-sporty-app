import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className="hero-container">
            
            <h1>FOLLOW DREAMS</h1>
            <p>build your ideal body</p>
            <div className="hero-btns">
                <Link to={'/Register'}>
                <Button className="btn" buttonStyle='btn--outline'
                buttonSize='btn--large'>GET STARTED</Button></Link>
                <Button className="btn" buttonStyle='btn--primary'
                buttonSize='btn--large'>WATCH TRAILER<i className='far fa-play-circle'/></Button>
            </div>
        </div>
    )
}

export default HeroSection
