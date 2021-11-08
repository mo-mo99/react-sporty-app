import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton]= useState(false);

    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false);

    const showButton = () =>{
    if(window.innerWidth <= 960){
        setButton(false);
    } else {
        setButton(true);
    }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMoblieMenu}>
                    sporty<i className="fab fa-typo3"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMoblieMenu}>
                            Main
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/exercises" className="nav-links" onClick={closeMoblieMenu}>
                            exercises
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-links" onClick={closeMoblieMenu}>
                            profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMoblieMenu}>
                            products
                        </Link>
                    </li>
                    <li>
                        <Link to="/Register" className="nav-links-mobile" onClick={closeMoblieMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Link to="/Register"><Button buttonStyle='btn--outline'>SIGN UP</Button></Link>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
