import React, { useState } from 'react';
import logo from '../assets/Images/logo.png';
import '../style.css'; // Create this CSS file for custom styles

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="navbar navbar-expand-lg navbar-light bg-white fixed-top custom-header">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="#home">
                        <img src={logo} alt="Logo" height="50" className="me-2" />
                        <span className="brand-text">Assets91</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav gap-4">
                            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact-us">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            {/* Add a spacer div to prevent content overlap */}
            <div className="header-spacer"></div>
        </>
    );
};

export default Header;