"use client"
import React, { useState } from 'react';

// Define a type for the props if you need to pass any
type HeaderProps = {
  // Add any props you might need here
};

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black  shadow-lg ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <span className="font-semibold text-2xl tracking-tight text-ble">FlightFinder</span>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="/search" className="hover:text-gray-300 transition duration-300 ease-in-out">Search Flights</a>
          <a href="/my-bookings" className="hover:text-gray-300 transition duration-300 ease-in-out">Bookings</a>
          <a href="/about" className="hover:text-gray-300 transition duration-300 ease-in-out">About</a>
          <a href="/contact" className="hover:text-gray-300 transition duration-300 ease-in-out">Support</a>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300 ease-in-out">
              Log In
            </button>
            <button className="bg-blue-600 border border-white text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
              Sign Up
            </button>
          </div>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-6 pt-4 pb-2">
            <a href="/search" className="block py-2 hover:text-gray-300 transition duration-300 ease-in-out">Search Flights</a>
            <a href="/my-bookings" className="block py-2 hover:text-gray-300 transition duration-300 ease-in-out">Bookings</a>
            <a href="/about" className="block py-2 hover:text-gray-300 transition duration-300 ease-in-out">About</a>
            <a href="/contact" className="block py-2 hover:text-gray-300 transition duration-300 ease-in-out">Support</a>
            <div className="mt-4">
              <button className="block w-full bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300 ease-in-out mb-2">
                Log In
              </button>
              <button className="block w-full bg-blue-600 border border-white text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
