import React from 'react';
import { Button } from '@/components/ui/button';
import { Plane, Globe, Calendar, Users } from 'lucide-react';
import b777 from "@/public/jpg-jpeg/b777.jpg"

const AirplaneMain: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-gray-900 text-white bg-no-repeat" style={{ backgroundImage: `url(${b777.src})`, backgroundSize: "100%", }}>
            <div className="relative flex flex-col items-center justify-center h-screen text-center px-6 z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Experience the Skies with <br /> Our Premium Flights
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Discover unparalleled comfort and service on board our state-of-the-art Boeing 777s. Book now to enjoy a journey like no other.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
                    Book Your Flight
                </Button>
            </div>

            {/* Additional Content */}
            <div className="bg-gray-800 py-16">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">
                        Why Fly with Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <Plane className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-2">Top-of-the-Line Aircraft</h3>
                            <p>
                                Experience the latest in aviation technology with our fleet of modern Boeing 777s.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <Globe className="w-12 h-12 text-green-500 mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-2">Global Destinations</h3>
                            <p>
                                Fly to destinations around the world with our extensive network and connections.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <Calendar className="w-12 h-12 text-red-500 mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-2">Flexible Booking</h3>
                            <p>
                                Enjoy flexible booking options and easy changes to your travel plans.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <Users className="w-12 h-12 text-yellow-500 mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-2">Exceptional Service</h3>
                            <p>
                                Our dedicated staff is committed to providing exceptional service from check-in to arrival.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AirplaneMain;
