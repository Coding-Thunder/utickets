import React from 'react';
import b777 from "@/public/webp/b777.webp";
import SearchFlights from './SearchFlights';

const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-blue-900 text-white py-24 overflow-hidden">
            <div
                className="absolute opacity-50 top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${b777.src})` }}
            />
            <div className="relative container mx-auto px-6 flex flex-col items-center">
                <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Explore the skies</h1>
                <p className="text-xl mb-10 drop-shadow-lg">Find and book flights at the best prices.</p>
                <div className="w-full max-w-5xl text-gray-900">
                    <SearchFlights />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
