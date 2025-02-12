import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

import logo from '../assets/Images/logo.svg'; // Import your logo

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container text-center">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="EVeez Logo" className="footer-logo-img" />
                    </div>
                    <div className="footer-contact-info">
                        <p><FaPhoneAlt className="footer-icon" /> Phone: +917807702595</p>
                        <p><FaEnvelope className="footer-icon" /> Email: write.assets91@gmail.com</p>
                        <p><FaMapMarkerAlt className="footer-icon" /> Address: Ground Floor, 886/T-13, Ward No. 8, Mehrauli, New Delhi, South Delhi, Delhi 110030.</p>
                    </div>
                </div>
                <p className="footer-copyright">&copy; 2025 EVeez. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
