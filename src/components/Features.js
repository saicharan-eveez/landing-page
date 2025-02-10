import React from 'react';
import featuresImage from '../assets/Images/Features.png'; // Import the image

const Features = () => {
    return (
        <section id="features" className="features-section">
            <div className="container text-center">
                {/* Heading */}
                <h2 className="display-4">Electric Mobility is the Future</h2>
                <p className="lead">
                    Last Mile Delivery, Sales Force Mobility, In-Campus Mobility, & Personal Mobility
                </p>

                {/* Image */}
                <div className="image-container">
                    <img src={featuresImage} alt="Features" className="features-image" />
                </div>
            </div>
        </section>
    );
};

export default Features;
