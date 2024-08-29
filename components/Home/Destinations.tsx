import React from 'react';
import dallas from "@/public/webp/dallas.webp"
import newYork from "@/public/webp/newyork.webp"
import seattle from "@/public/webp/seattle.webp"

type Destination = {
    name: string;
    image: string;
    description: string;
    link: string;
};

const destinations: Destination[] = [
    {
        name: 'Dallas',
        image: dallas.src,
        description: 'Dallas is a city in the U.S. state of Texas and the most populous city in the Dallas–Fort Worth metroplex',
        link: '/dallas',
    },
    {
        name: 'New York',
        image: newYork.src,
        description: 'New York, often called New York City or NYC, is the most populous city in the United States',
        link: '/newyork',
    },
    {
        name: 'Seattle',
        image: seattle.src,
        description: 'Seattle is a seaport city on the West Coast of the United States. It is the seat of King County, Washington',
        link: '/seattle',
    },
];

const FeaturedDestinations: React.FC = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
                    Featured Destinations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {destinations.map((destination) => (
                        <div key={destination.name} className="bg-white rounded-lg shadow-lg overflow-hidden ">
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-blue-600">{destination.name}</h3>
                                <p className="mt-2 text-gray-700">{destination.description}</p>
                                <a
                                    href={destination.link}
                                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
                                >
                                    Check Fares                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedDestinations;
