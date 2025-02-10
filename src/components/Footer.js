// src/components/Footer.js
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Images/logo.png"; // Ensure the logo is in the correct path

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Left - Company Info */}
                    <div className="footer-logo">
                        <img src={logo} alt="EVeez Logo" className="logo" />
                        <p className="footer-about">
                            EVeez is revolutionizing electric bike subscriptions with zero down payment, flexible plans, and end-to-end service support.
                        </p>
                    </div>

                    {/* Middle - Quick Links */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right - Social Media */}
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://linkedin.com/company/eveez" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://twitter.com/eveez" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://instagram.com/eveez" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://facebook.com/eveez" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom - Copyright */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} EVeez. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
