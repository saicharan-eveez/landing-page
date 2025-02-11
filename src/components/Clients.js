import React from 'react';
import eveezLogo from '../assets/Images/evlog.png'; // Ensure the path is correct

const Clients = () => {
    return (
        <div>
            {/* Clients Section */}
            <section id="clients" className="clients-section">
                <div className="container text-center">
                    <h2 className="display-4 text-orange">Our Clients & Associates</h2>
                    <h3 className="sub-title">EVeez – Brand Partners</h3>

                    <div className="clients-grid">
                        {[
                            { img: eveezLogo, name: "Eveez" },
                            // Add more clients as necessary
                        ].map((client, index) => (
                            <div key={index} className="client-card">
                                <img src={client.img} alt={client.name} className="client-logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
