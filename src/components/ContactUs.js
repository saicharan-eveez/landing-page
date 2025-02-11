import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const ContactUs = () => {
    return (
        <section id="contact-us" className="contact-us-section">
            <div className="container">
                <h2 className="text-center">Contact Us</h2>
                <p className="text-center">Feel free to reach out to us with any questions or concerns!</p>

                <div className="contact-details">
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <span className="contact-text">info@eveez.com</span>
                    </div>
                    <div className="contact-item">
                        <FaPhoneAlt className="contact-icon" />
                        <span className="contact-text">+91 78077 02595</span>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <span className="contact-text">
                            Ground Floor, 886/T-13, Ward No. 8, Mehrauli, New Delhi, South Delhi, Delhi 110030
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
