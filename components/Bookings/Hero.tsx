import React from 'react';
import { FaCalendarAlt, FaTicketAlt } from 'react-icons/fa';
import Image from 'next/image';
import b777 from "@/public/webp/b777.webp"
import Link from 'next/link';
import { routings } from '@/lib/utils';

const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-blue-900 text-white py-20">
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src={b777.src} // Replace with your image URL
                    alt="Booking Hero Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-50"
                />
            </div>
            <div className="relative container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Manage Your Bookings with Ease
                </h1>
                <p className="text-lg mb-6">
                    View, edit, or cancel your flight reservations effortlessly. Our platform keeps all your travel details in one convenient place.
                </p>
                <div className="flex justify-center items-center space-x-4 mb-8">
                    <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-2xl" />
                        <span className="text-lg">Date of Travel</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaTicketAlt className="text-2xl" />
                        <span className="text-lg">Booking Reference</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
