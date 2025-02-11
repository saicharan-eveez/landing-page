import React from 'react';
import { FaWrench, FaLocationArrow, FaShieldAlt } from 'react-icons/fa';
import '../style.css';  // Custom CSS for styling

const WhyChoose = () => {
    const features = [
        {
            icon: <FaWrench />,
            title: "Service & Support",
            description: "Regular free service, consumables free of cost, and breakdown support."
        },
        {
            icon: <FaLocationArrow />,
            title: "IoT",
            description: "GPS tracking, Geo Fencing, and Battery level."
        },
        {
            icon: <FaShieldAlt />,
            title: "Insurance",
            description: "Theft and damages covered."
        }
    ];

    return (
        <section id="why-choose" className="why-choose-section">
            <div className="container text-center">
                <h2 className="section-title">Why Choose Assets91?</h2>
                <div className="features">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
