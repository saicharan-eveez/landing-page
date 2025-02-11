import React from 'react';
import logo from '../assets/Images/logo.svg'; // Logo import

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <img src={logo} alt="Logo" height="50" />
                    <span className="brand-name">Assets91</span> {/* Added text beside the logo */}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact-us">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
