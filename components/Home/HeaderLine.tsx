import Link from 'next/link';
import React from 'react';
import { FaTag } from 'react-icons/fa'; // Importing a tag icon for promotional offers

const HeaderLine: React.FC = () => {
    return (
        <section className="py-8 border-y border-gray-200">
            <div className="container px-6 text-center mx-auto gap-4 flex items-center justify-center">
                <FaTag className="text-5xl text-blue-600 mr-3" />
                <p className="text-3xl font-medium">
                    Get up to <span className='text-red-600'>30% off</span> Flight bookings with {" "}
                    <Link href={"https://universalticketss.com/"} target='_blank'>
                        universalticketss.com
                    </Link>
                    . So, what are you waiting for?
                </p>
            </div>
        </section>
    );
};

export default HeaderLine;
