import React, { useState } from 'react';
import styles from './UserAvatar.module.css'; // Import CSS module

// Define the interface for props
interface Props {
    full_name: string;
    photoUrl?: string;
    onLogout?: () => void; // Optional logout function
}

const UserAvatar: React.FC<Props> = ({ full_name, photoUrl, onLogout }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleAvatarClick = () => {
        setPopupVisible(!isPopupVisible);
    };

    const handleLogoutClick = () => {
        setPopupVisible(false);
        if (onLogout) onLogout();
    };

    // Extract the first letter of the full name
    const firstLetter = full_name ? full_name.charAt(0).toUpperCase() : '';

    return (
        <div className="relative inline-block">
            {/* Display profile photo if available */}
            <div
                onClick={handleAvatarClick}
                className="cursor-pointer hover:opacity-80 transition-opacity"
            >
                {photoUrl ? (
                    <img
                        src={photoUrl}
                        alt={full_name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-400 shadow-lg"
                    />
                ) : (
                    <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full text-3xl font-bold border-2 border-gray-400 shadow-lg">
                        {firstLetter}
                    </div>
                )}
            </div>

            {/* Popup */}
            {isPopupVisible && (
                <div
                    className={`absolute top-20 right-0 w-80 p-6 bg-gray-800 text-white border border-gray-700 rounded-xl shadow-2xl transform transition-transform duration-300 ${styles.popup}`}
                    style={{
                        opacity: isPopupVisible ? 1 : 0,
                        transform: isPopupVisible ? 'translateY(0)' : 'translateY(-20px)',
                    }}
                >
                    <div className="flex items-center mb-4">
                        <div className="w-24 h-24 flex items-center justify-center bg-blue-500 text-white rounded-full text-4xl font-bold border-2 border-gray-700 shadow-lg">
                            {firstLetter}
                        </div>
                        <div className="ml-4">
                            <p className="text-xl font-bold">{full_name}</p>
                            <p className="text-sm text-gray-300">user@example.com</p> {/* Replace with actual email if available */}
                        </div>
                    </div>
                    <button
                        onClick={handleLogoutClick}
                        className="w-full py-3 px-4 mt-4 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserAvatar;
