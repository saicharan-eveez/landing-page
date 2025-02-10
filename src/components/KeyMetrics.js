// src/components/KeyMetrics.js
import React from 'react';
import { FaChartLine, FaUserCheck, FaWrench, FaBicycle } from 'react-icons/fa';

const KeyMetrics = () => {
    return (
        <section id="key-metrics" className="key-metrics-section">
            <div className="container text-center">
                <h2 className="display-4 text-orange">Key Metrics</h2>
                <div className="row mt-4">
                    <div className="col-md-3">
                        <div className="metric-card">
                            <FaChartLine className="metric-icon" />
                            <h4>Utilization Ratio</h4>
                            <p>Our fleet is almost fully deployed and earning revenues. Demand is higher than supply.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="metric-card">
                            <FaUserCheck className="metric-icon" />
                            <h4>Customer Retention</h4>
                            <p>Our customers have been loyal and expanded their fleets. Churn is mainly due to business stability.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="metric-card">
                            <FaWrench className="metric-icon" />
                            <h4>Service Cost %</h4>
                            <p>Cost of service and consumables has been less than 10% of the subscription value over 10+ months.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="metric-card">
                            <FaBicycle className="metric-icon" />
                            <h4>% Fleet on Lease</h4>
                            <p>We are building an asset-light model with partners leasing eBikes to us for 3 years with assured returns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyMetrics;
