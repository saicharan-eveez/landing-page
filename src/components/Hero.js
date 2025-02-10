import React from 'react';
import HeroImage from '../assets/Images/Home.png'; // Import background image
import '../style.css'; // Import custom CSS file

const Hero = () => {
    return (
        <section
            id="home"
            className="hero-section"
            style={{ backgroundImage: `url(${HeroImage})` }}
        >
            <div className="hero-overlay">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 col-md-8 col-12">
                            <h1 className="hero-title">
                                Welcome to <span className="brand-name">EVeez</span>
                            </h1>
                            <p className="hero-text">
                                Building India’s Largest EV Subscription Platform.
                            </p>
                            <button className="hero-button">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
