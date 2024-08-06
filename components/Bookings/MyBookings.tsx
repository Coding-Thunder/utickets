"use client"
import React, { useState } from 'react';
import { FaCalendarAlt, FaPlane, FaCheckCircle } from 'react-icons/fa';
import { MdOpenInNew } from "react-icons/md";

import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import BookingDetailsModal from './BookingDetailsModal';

const bookings = [
    {
        id: '12345',
        origin: 'JFK',
        destination: 'LAX',
        departureDate: '2024-08-15',
        returnDate: '2024-08-22',
        status: 'Confirmed',
        price: '$199'
    },
    {
        id: '67890',
        origin: 'ORD',
        destination: 'ATL',
        departureDate: '2024-09-10',
        returnDate: '2024-09-17',
        status: 'Pending',
        price: '$149'
    }
];

const MyBooking: React.FC = () => {
    const [showDetails, setShowDetails] = useState<boolean>(false)
    return (
        <>
            <section className="bg-gray-100 py-16 min-h-screen">
                <div className="container mx-auto px-6">
                    <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookings.map((booking) => (
                            <div key={booking.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <FaPlane className="text-blue-500 text-3xl mr-3" />
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">
                                                {booking.origin} <span className="text-blue-500 mx-2">→</span> {booking.destination}
                                            </h3>
                                            <p className="text-gray-600">
                                                <FaCalendarAlt className="inline mr-1" />
                                                {booking.departureDate} - {booking.returnDate}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className={`text-sm font-medium ${booking.status === 'Confirmed' ? 'text-green-500' : 'text-yellow-500'}`}>
                                            <FaCheckCircle className="inline mr-1" />
                                            {booking.status}
                                        </span>
                                        <span className="text-lg font-bold">{booking.price}</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <Button onClick={() => setShowDetails(!showDetails)} className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                                            View
                                        </Button>
                                        {/* <Button className="flex items-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out">
                                            Request Cancelation
                                        </Button> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <BookingDetailsModal onOpenChange={() => setShowDetails(!showDetails)} isOpen={showDetails} />

        </>
    );
};

export default MyBooking;
