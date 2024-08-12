import React from 'react';
import tokyo from "@/public/webp/tokyo.webp"
import paris from "@/public/webp/paris.webp"
import sydney from "@/public/webp/sydney.webp"

type Destination = {
    name: string;
    image: string;
    description: string;
    link: string;
};

const destinations: Destination[] = [
    {
        name: 'Paris, France',
        image: paris.src,
        description: 'The city of lights and love, known for its art, fashion, and culture.',
        link: '/paris',
    },
    {
        name: 'Tokyo, Japan',
        image: tokyo.src,
        description: 'A bustling metropolis with a unique blend of tradition and modernity.',
        link: '/tokyo',
    },
    {
        name: 'Sydney, Australia',
        image: sydney.src,
        description: 'Home to the iconic Sydney Opera House and beautiful beaches.',
        link: '/sydney',
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
