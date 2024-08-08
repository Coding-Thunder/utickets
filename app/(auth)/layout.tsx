import SupportHeader from '@/components/Commmon/SupportHeader';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Universal Ticketss",
    description: "Book cheap flight tickets",
};


const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <main>
            <SupportHeader />
            {children}
        </main>
    )
}

export default AuthLayout