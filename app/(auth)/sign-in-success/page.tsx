"use client"
import { routings } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SignInSuccess = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect after 5 seconds
        const timer = setTimeout(() => {
            router.push(routings.home);
        }, 5000);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, [router]);

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 shadow-lg max-w-lg w-full">
                <h1 className="text-4xl font-bold mb-6">Welcome to Universal Tickets!</h1>
                <p className="text-lg mb-4">You have successfully signed in.</p>
                <p className="text-sm mb-6 opacity-75">Redirecting you to your dashboard...</p>
                <button
                    onClick={() => router.push('/dashboard')}
                    className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded-full text-lg w-full"
                >
                    Go to Dashboard Now
                </button>
            </div>
        </div>
    );
};

export default SignInSuccess;
