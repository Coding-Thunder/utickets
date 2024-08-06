import React from 'react';
import { FaPlane } from 'react-icons/fa';
import americanAirlines from "@/public/png/aa.png"
import unitedAirlines from "@/public/png/ua.png"
import frontienrAirlines from "@/public/png/fa.png"
import spiritAirlines from "@/public/jpg-jpeg/sa.jpg"
import { cn } from '@/lib/utils';

const popularRoutes = [
    {
        origin: 'JFK',
        destination: 'LAX',
        fare: '$199',
        image: frontienrAirlines.src
    },
    {
        origin: 'ORD',
        destination: 'ATL',
        fare: '$149',
        image: unitedAirlines.src
    },
    {
        origin: 'DFW',
        destination: 'MIA',
        fare: '$179',
        image: americanAirlines.src
    },
    {
        origin: 'SEA',
        destination: 'SFO',
        fare: '$159',
        image: spiritAirlines.src
    }
];

const PopularRoutes: React.FC = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8">Popular Routes</h2>
                <p className="text-lg mb-12">Explore popular routes between major US airports.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {popularRoutes.map((route, index) => {
                        let spirit = index === 3
                        return (
                            <div key={index} className={cn("bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center")}>
                                <img src={route.image} alt={`${route.origin} to ${route.destination}`} className={cn("w-[50px] mx-auto my-[30px] object-contain", { "w-[80px]": spirit })} />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {route.origin} <span className="text-blue-500 mx-2">→</span> {route.destination}
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-lg font-bold">Starting at {route.fare}</p>
                                    <button className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                                        <FaPlane className="mr-2" />
                                        View Details
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default PopularRoutes;
