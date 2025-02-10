// src/components/Advantage.js
import React from 'react';
import { FaBicycle, FaTools, FaSatelliteDish, FaShieldAlt } from 'react-icons/fa';

const Advantage = () => {
    return (
        <section id="advantages" className="advantages-section">
            <div className="container text-center">
                <h2 className="display-4 text-orange">Why Choose EVeez?</h2>
                <div className="row mt-4">
                    <div className="col-md-3">
                        <div className="advantage-card">
                            <FaBicycle className="advantage-icon" />
                            <h4>eBike Subscription</h4>
                            <p>No Down Payment & Full Flexibility to stop and start subscription.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="advantage-card">
                            <FaTools className="advantage-icon" />
                            <h4>Service & Support</h4>
                            <p>Regular free service, consumables free of cost, and breakdown support.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="advantage-card">
                            <FaSatelliteDish className="advantage-icon" />
                            <h4>IoT</h4>
                            <p>GPS tracking, Geo Fencing, and Battery level monitoring.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="advantage-card">
                            <FaShieldAlt className="advantage-icon" />
                            <h4>Insurance</h4>
                            <p>Coverage for theft and damages.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantage;
