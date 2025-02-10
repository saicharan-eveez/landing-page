import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../style.css"; // Import styles

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    };

    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>

                <div className="contact-grid">
                    {/* Left: Contact Form */}
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <label>Full Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                            <label>Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                            <label>Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    {/* Right: Offices & Google Map */}
                    <div className="contact-info-container">
                        <div className="office-section">
                            <h2>Our Offices</h2>

                            <div className="offices-container">
                                {[
                                    {
                                        city: "Head Office",
                                        address: "AIHP Executive Center, Plot No. 48, Institutional Area, Sector 32, Gurugram, Haryana 122001"
                                    },
                                    {
                                        city: "Noida Office",
                                        address: "Travel Tech Experiences Pvt Ltd, Worxways Co-working Office H-213, Sector 63 Rd, Noida, Uttar Pradesh 201301"
                                    },
                                    {
                                        city: "Hyderabad Office",
                                        address: "Ikeva, Level 3, NSL Centrum, Road No 1, Lane, Opp. Forum Mall, Hyderabad, Telangana 500072"
                                    },
                                    {
                                        city: "Bangalore Office",
                                        address: "334, 4th Floor, 27th Main Road, 2nd Sector, HSR Layout, Bangalore-560102"
                                    }
                                ].map((office, index) => (
                                    <div key={index} className="office-box">
                                        <FaMapMarkerAlt className="icon" />
                                        <div>
                                            <h4>{office.city}</h4>
                                            <p>{office.address}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Info (Phone & Email) */}
                            <div className="contact-info">
                                <div className="info-box">
                                    <FaPhoneAlt className="icon" />
                                    <p>+91 78077 02595</p>
                                </div>
                                <div className="info-box">
                                    <FaEnvelope className="icon" />
                                    <p>support@eveez.in</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="google-map">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83937453252!2d77.06889991973316!3d28.527582006001814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1881ac5c5b35%3A0x3b3f754b59cfed72!2sGurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1644838880921!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
