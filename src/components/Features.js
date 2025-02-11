import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing the arrow icon
import '../style.css';

const Features = () => {
    const features = [
        { title: 'Lower Operating Cost', description: '90% less than ICE vehicles.' },
        { title: 'Easy Maintenance', description: 'Less moving parts, hence less maintenance required.' },
        { title: 'Environment Friendly', description: 'No emissions, and almost no noise pollution.' },
        { title: 'IoT Tech Enabled', description: 'Easy integration with the default electronic systems.' },
        { title: 'Policy Environment', description: 'Govt. policy is increasingly favouring EV’s. Delhi Govt. has made it mandatory for ride aggregators and delivery services.' },
        { title: 'Lower Capital Cost', description: 'Governments providing incentives for adoption of eMobility.' }
    ];

    return (
        <section id="features" className="features-section">
            <div className="container text-center">
                <h2 className="section-title">Electric Mobility is the Future</h2>
                <p className="section-subtitle">Last Mile Delivery, Sales Force Mobility, In-Campus Mobility, & Personal Mobility</p>

                <div className="features-container">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className={`feature-icon icon-${index + 1}`}></div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <div className="arrow-icon">
                                <FaArrowRight /> {/* React Icon arrow */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
