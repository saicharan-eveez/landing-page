import React from 'react';
import zomatoLogo from '../assets/Images/zomato.jpeg';
import blinkitLogo from '../assets/Images/blinkit.webp';
import swiggyLogo from '../assets/Images/swiggy.webp';
import flipkartLogo from '../assets/Images/Flipkart.png';
import uberLogo from '../assets/Images/uber.png';
import rapidoLogo from '../assets/Images/rapido.png';
import tata1mgLogo from '../assets/Images/TATA.png';
import zeptoLogo from '../assets/Images/zepto.webp';
import splootLogo from '../assets/Images/Sploot.jpeg';

const Clients = () => {
    return (
        <section id="clients" className="clients-section">
            <div className="container text-center">
                <h2 className="display-4 text-orange">Our Clients & Associates</h2>
                <h3 className="sub-title">EVeez – Brand Partners</h3>

                <div className="clients-grid">
                    {[
                        { img: zomatoLogo, name: "Zomato" },
                        { img: blinkitLogo, name: "Blinkit" },
                        { img: swiggyLogo, name: "Swiggy" },
                        { img: flipkartLogo, name: "Flipkart" },
                        { img: uberLogo, name: "Uber" },
                        { img: rapidoLogo, name: "Rapido" },
                        { img: tata1mgLogo, name: "TATA 1MG" },
                        { img: zeptoLogo, name: "Zepto" },
                        { img: splootLogo, name: "Sploot" },
                    ].map((client, index) => (
                        <div key={index} className="client-card">
                            <img src={client.img} alt={client.name} className="client-logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
