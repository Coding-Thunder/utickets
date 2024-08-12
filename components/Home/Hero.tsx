import React from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import b777 from "@/public/webp/b777.webp"
import Link from 'next/link';

// Define the airplane image link as a variable

const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-blue-900   text-white py-24   overflow-hidden">
            <div className="absolute opacity-50   top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${b777.src})` }} />
            <div className="relative container  mx-auto px-6 flex flex-col items-center">
                <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Explore the Skies</h1>
                <p className="text-xl mb-10 drop-shadow-lg">Find and book flights at the best prices.</p>
                <div className="w-full max-w-5xl  text-gray-900">
                    <form className="flex flex-wrap bg-white items-center gap-4 p-6 rounded-lg shadow-lg backdrop-blur-lg bg-opacity-80">
                        {/* Leaving From Field */}
                        <div className="flex-1 min-w-[180px] flex flex-col relative">
                            <label className="text-gray-500 text-sm mb-1">Leaving from</label>
                            <div className="flex items-center">
                                <FaPlaneDeparture className="absolute left-3 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Leaving from"
                                    className="w-full pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        {/* Where To Field */}
                        <div className="flex-1 min-w-[180px] flex flex-col relative">
                            <label className="text-gray-500 text-sm mb-1">Where to</label>
                            <div className="flex items-center">
                                <FaPlaneArrival className="absolute left-3 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Where to"
                                    className="w-full  pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        {/* Depart Date Field */}
                        <div className="flex-1 min-w-[180px] flex flex-col relative">
                            <label className="text-gray-500 text-sm mb-1">Depart</label>
                            <div className="flex items-center">
                                <FaCalendarAlt className="absolute left-3 text-gray-500" />
                                <input
                                    type="date"
                                    className="w-full px-4 pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        {/* Return Date Field */}
                        <div className="flex-1 min-w-[180px] flex flex-col relative">
                            <label className="text-gray-500 text-sm mb-1">Return</label>
                            <div className="flex items-center">
                                <FaCalendarAlt className="absolute left-3 text-gray-500" />
                                <input
                                    type="date"
                                    className="w-full px-4 pl-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </form>
                    {/* Button Container */}
                    <div className="flex justify-center items-center mt-6">
                        <Link href="/bookings" className="flex items-center justify-center bg-yellow-500 text-blue-900 py-3 px-6 rounded-md font-semibold hover:bg-yellow-600 transition duration-300 ease-in-out">
                            <FaSearch className="text-xl" />
                            <span className="ml-2">Search Flights</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
