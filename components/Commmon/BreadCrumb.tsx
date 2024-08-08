"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const Breadcrumb: React.FC = () => {
    const pathname = usePathname();
    const pathnames = pathname.split('/').filter((x) => x);

    return (
        <nav className="bg-gray-100 p-4 rounded-lg">
            <ol className="flex items-center space-x-4">
                <li>
                    <Link href="/" className="text-blue-600 hover:underline flex items-center">
                        <FaHome className="mr-2" />
                        Home
                    </Link>
                </li>
                {pathnames.map((segment, index) => {
                    const href = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return (
                        <React.Fragment key={href}>
                            <li>
                                <span className="text-gray-600">/</span>
                            </li>
                            <li>
                                <Link href={href} className="text-blue-600 hover:underline">
                                    {decodeURIComponent(segment)}
                                </Link>
                            </li>
                        </React.Fragment>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
