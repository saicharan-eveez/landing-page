import React from 'react';
import GauravImage from '../assets/Images/gourav.png'; // Import image
import AbhishekImage from '../assets/Images/abhishek.png'; // Import image

const About = () => {
    return (
        <section id="about" className="about-section bg-white py-5">
            <div className="container">
                <h2 className="display-4 text-center">About Us</h2>
                <p className="lead text-center">
                    EVeez is a proprietary brand of TravelTech Experiences Pvt. Ltd., one of the pioneers in
                    Electric Vehicle subscription ecosystems in India. TravelTech is an initiative of a team
                    led by sensitive and passionate individuals who are driven by technology and sustainability.
                </p>

                {/* Founders Section */}
                <div className="founders text-center mt-5">
                    <h3 className="founders-title">Meet Our Founders</h3>
                    <div className="founders-container">
                        <div className="founder-profile">
                            <img src={GauravImage} alt="Gaurav Rathore" className="founder-image" />
                            <h4>Gaurav Rathore</h4>
                            <p>Gaurav is an IIT Mumbai alumnus and a serial entrepreneur with a deep passion for technology and sustainability.</p>
                        </div>
                        <div className="founder-profile">
                            <img src={AbhishekImage} alt="Abhishek Dwivedi" className="founder-image" />
                            <h4>Abhishek Dwivedi</h4>
                            <p>Abhishek, a design thinker and strategist from NID Ahmedabad, believes in the power of networks and innovative solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
