"use client"; // Ensure this component is rendered on the client side
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button'; // Adjust the path as needed
import { AlertTriangle } from 'lucide-react'; // Import the AlertTriangle icon from Lucide React

// Define the props interface
interface Props {
    message: string; // Single text prop
}

const ErrorPage: React.FC<Props> = ({ message }) => {
    const router = useRouter();

    const handleHomeRedirect = () => {
        router.push('/'); // Navigate to the homepage
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100 text-center">
            {/* Use the AlertTriangle icon with increased size */}
            <AlertTriangle className="text-red-600" size={100} />
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg text-gray-700 mb-6">{message}</p> {/* Use the prop for the message */}
            <Button onClick={handleHomeRedirect}>
                Go to Homepage
            </Button>
        </div>
    );
};

export default ErrorPage;
