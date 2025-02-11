import React from 'react';
import HeroImage from '../assets/Images/Home.png';
import '../style.css';

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
                        <div className="col-lg-6 col-md-8 col-12 text-center text-md-start">
                            <h1 className="hero-title">
                                Welcome to <span className="brand-name">Assets91</span>
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
