import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const AddressSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                        <FaMapMarkerAlt className="text-3xl text-blue-600" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Our Address</h3>
                            <p className="text-gray-600 mt-2">1309 Coffeen Avenue, STE 1200, Sheridan, Wyoming 82801, USA</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                        <FaPhoneAlt className="text-3xl text-blue-600" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                            <p className="text-gray-600 mt-2">+1-860-946-4369</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                        <FaEnvelope className="text-3xl text-blue-600" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                            <p className="text-gray-600 mt-2">support@universaltickets.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddressSection;
