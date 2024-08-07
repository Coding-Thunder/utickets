import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const MissionVision: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                    At Universal Ticketss, our mission is to revolutionize the travel industry with transparent pricing and exceptional customer service. We envision a world where every journey is seamless and stress-free, connecting people and places with ease.
                </p>
                <div className="flex flex-col md:flex-row md:justify-center gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-left">
                        <FaCheckCircle className="text-blue-500 text-2xl mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Customer-Centric Approach</h3>
                        <p className="text-gray-700">
                            We prioritize our {"customer's"} needs and provide personalized support to ensure a smooth travel experience from start to finish.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-left">
                        <FaCheckCircle className="text-blue-500 text-2xl mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Innovation & Technology</h3>
                        <p className="text-gray-700">
                            Leveraging cutting-edge technology, we continuously innovate to offer the best booking solutions and travel insights.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-left">
                        <FaCheckCircle className="text-blue-500 text-2xl mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Transparency & Integrity</h3>
                        <p className="text-gray-700">
                            We believe in transparency and honesty, ensuring clear communication and no hidden fees, so you can travel with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
