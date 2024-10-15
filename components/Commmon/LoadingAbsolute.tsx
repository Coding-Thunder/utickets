import React from 'react';
import {  Loader } from 'lucide-react';

const LoadingAbsolute = () => {
    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <Loader className="animate-spin text-blue-500" size={100} />
        </div>
    );
}

export default LoadingAbsolute;
