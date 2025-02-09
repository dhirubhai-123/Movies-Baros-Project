import React from 'react';
import { Loader } from 'lucide-react'; // Import the loader icon from lucide-react

const LoaderComponent = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-800 z-50">
            <div className="flex flex-col items-center justify-center space-y-4">
                <Loader className="animate-spin text-white" size={48} />
                <span className="text-white text-xl">Loading...</span>
            </div>
        </div>
    );
};

export default LoaderComponent;
