import React from 'react';
import { Button } from '@/components/ui/button';
import { FaInfoCircle } from 'react-icons/fa';
import b777 from "@/public/jpg-jpeg/b777.jpg"

const AboutPageHero: React.FC = () => {
    return (
        <section className="relative  flex items-center justify-center h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${b777.src})` }}>
            <div className="absolute bg-blue-900  inset-0  bg-opacity-50"></div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Universal Ticketss</h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                    At Universal Ticketss, our mission is to provide the best ticketing solutions with a focus on customer satisfaction and transparency.
                </p>
                <p className="text-sm md:text-base mb-8 max-w-2xl mx-auto">
                    We are passionate about making your travel experiences seamless and enjoyable. Discover our story, our values, and how we strive to bring the best travel options to you.
                </p>
                {/* <Button className="bg-blue-500 text-white rounded-full px-6 py-3 shadow-lg hover:bg-blue-600 transition duration-300">
                    <FaInfoCircle className="inline-block mr-2" /> Learn More
                </Button> */}
            </div>
        </section>
    );
};

export default AboutPageHero;
