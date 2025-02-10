import React, { useState } from "react";

const faqs = [
    {
        question: "What’s the monthly return on an investment of 10 lakh?",
        answer: "You will get a monthly return of Rs. 36,800 for 36 months. This is a monthly IRR of 21.1%."
    },
    {
        question: "How many EVs in your fleet are currently being deployed?",
        answer: "All available EVs have been deployed and we have customer orders pending for fulfillment. We will be maintaining close to 100% utilization."
    },
    {
        question: "What ensures the safety of the investment?",
        answer: "First, the EV will be owned by you, so the asset itself will act as collateral. Second, the return is guaranteed by EVeez, even if the EV is not being utilized. We have raised a round of equity investment so we have cash reserves for any eventuality."
    },
    {
        question: "What if the EV gets stolen?",
        answer: "All the EVs will be covered under insurance. We also have GPS tracking and Remote Immobilization features."
    },
    {
        question: "What is the life of an EV?",
        answer: "The battery would surely need to be replaced at the end of 3 years, hence we are formulating a lease-to-ownership transfer at the end of 3 years."
    },
    {
        question: "What is the resale value of EVs?",
        answer: "The second-hand market for EVs is still in the nascent stage, so no formal resale values can be calculated. However, we have sold some EVs & have got close to 80% value for a 6-month-old EV."
    }
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section py-16 px-4">
            <div className="container max-w-5xl mx-auto"> {/* Increased max width */}
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">Frequently Asked Questions</h2>
                <div className="faq-list space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button
                                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-900 bg-transparent hover:bg-gray-100 transition-all duration-200"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-left flex-1">{faq.question}</span>
                                <span className="text-orange-500 text-xl ml-4">{openIndex === index ? "▲" : "▼"}</span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 text-gray-700">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
