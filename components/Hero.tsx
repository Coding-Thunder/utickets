import React from 'react';
import flightIllustration from "../public/svg/hero-vector1.svg"

const Hero: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                <div className="flex-1 mb-10 md:mb-0 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Find Your Next <br /> Desination
                    </h1>
                    <p className="mt-4 text-lg md:text-xl">
                        Discover the best deals on flights to your favorite destinations.
                    </p>
                    <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-full shadow hover:bg-gray-100 transition duration-300 ease-in-out">
                        Book Now
                    </button>
                </div>
                <div className="flex-1 text-center">
                    <img
                        src={flightIllustration.src}
                        alt="Travel illustration"
                        className="w-full max-w-md mx-auto md:mx-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
