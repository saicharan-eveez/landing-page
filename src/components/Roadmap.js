// src/components/Roadmap.js
import React from "react";
import step1 from "../assets/Images/Step 1.svg";
import step2 from "../assets/Images/Step 2.svg";
import step3 from "../assets/Images/Step 3.svg";
import step4 from "../assets/Images/Step 4.svg";
import step5 from "../assets/Images/Step 5.svg";

const Roadmap = () => {
    const steps = [
        { img: step1, title: "BUY YOUR EVEEZ FRANCHISE", desc: "Start your business with a proven model." },
        { img: step2, title: "CHOOSE YOUR IDEAL LOCATION", desc: "Find the perfect spot that suits your vision." },
        { img: step3, title: "LAUNCH OPERATIONS", desc: "Get started with everything in place." },
        { img: step4, title: "LEADS FLOW AUTOMATICALLY", desc: "CRM integration ensures seamless customer management." },
        { img: step5, title: "ENJOY HIGH ROI", desc: "Reap the rewards of a thriving business." },
    ];

    return (
        <section id="roadmap" className="roadmap-section">
            <div className="container text-center">
                <h2 className="display-4 text-orange">Join EVeez - Roadmap</h2>
                <div className="grid-container">
                    {steps.map((step, index) => (
                        <div key={index} className="roadmap-item" style={{ animationDelay: `${index * 200}ms` }}>
                            <div className="roadmap-card">
                                <div className="icon-wrapper">
                                    <img src={step.img} alt={step.title} className="roadmap-icon" />
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
