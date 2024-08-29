import { routings } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { FaPhone } from 'react-icons/fa';

const Disclaimer: React.FC = () => {
    return (
        <section className="bg-gray-200 py-8 border-t border-gray-300">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm text-gray-700 mb-4">
                    Disclaimer{":"} The autonomous travel site Universal Ticketss is unaffiliated with any outsiders. You recognize that Universal Ticketss isn{"'"}t answerable for any misfortune{","} whether immediate or aberrant{","} coming about because of offers{","} content{","} or connections to different sites tracked down on this site by utilizing UniversalTicketss.com.
                </p>
                <p className="text-sm text-gray-700">
                    If you have any questions{","} call us at <a href="tel:our number" className="font-semibold text-blue-600 hover:underline">+18609464369</a>{","} our toll{"-"}free number. <Link href={routings.about} className="font-semibold text-blue-600 hover:underline">Read more...</Link>
                </p>
            </div>
        </section>
    );
};

export default Disclaimer;
