import React from 'react';
import { Button } from '@/components/ui/button';
import { FaDollarSign, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const CompareFares: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8">Compare Fares and Reliability</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Others */}
                    <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-3xl font-semibold mb-4">Others</h3>
                        <div className="flex items-center mb-6">
                            <FaDollarSign className="w-6 h-6 text-gray-700 mr-3" />
                            <span className="text-xl">Higher Prices</span>
                        </div>
                        <div className="flex items-center">
                            <FaExclamationTriangle className="w-6 h-6 text-yellow-500 mr-3" />
                            <span className="text-xl">Mixed Reliability</span>
                        </div>
                    </div>

                    {/* Us */}
                    <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-3xl font-semibold mb-4">Us</h3>
                        <div className="flex items-center mb-6">
                            <FaDollarSign className="w-6 h-6 text-green-500 mr-3" />
                            <span className="text-xl">Competitive Prices</span>
                        </div>
                        <div className="flex items-center">
                            <FaCheckCircle className="w-6 h-6 text-green-500 mr-3" />
                            <span className="text-xl">High Reliability</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
                        Compare Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CompareFares;
