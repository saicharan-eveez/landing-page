import React from 'react';
import { FaUserCheck, FaBicycle, FaFileContract, FaExchangeAlt, FaMoneyBillWave } from 'react-icons/fa';
import '../style.css'; // Import custom CSS for the roadmap animation

const BusinessPartner = () => {
    const roadmapSteps = [
        { icon: <FaUserCheck />, text: 'Join the Assets91 Business Partner Program by signing the agreement.' },
        { icon: <FaBicycle />, text: 'Buy eBikes from Assets91 trusted OEM partners.' },
        { icon: <FaFileContract />, text: 'Lease the eBikes to Assets91 for a period of 3 years.' },
        { icon: <FaExchangeAlt />, text: 'Assets91 deploys your eBikes to its trusted Brand Partners on Subscriptions.' },
        { icon: <FaMoneyBillWave />, text: 'Get Assured Monthly Returns for 3 years.' }
    ];

    return (
        <section id="business-partner" className="business-partner-section">
            <div className="container text-center">
                <h2 className="section-title">Business Partner Program</h2>
                <p className="section-subtitle">Join our exclusive business partner program and earn assured returns.</p>

                <div className="roadmap">
                    {roadmapSteps.map((step, index) => (
                        <div key={index} className={`roadmap-step step-${index + 1}`}>
                            <div className="roadmap-box">
                                <div className="roadmap-icon">{step.icon}</div>
                            </div>
                            <p>{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessPartner;
