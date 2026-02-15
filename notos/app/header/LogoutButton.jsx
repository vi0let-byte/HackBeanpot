"use client";
import React from 'react';

export const LogoutButton = () => {
    const handleClick = () => {
        // navigation handled by the anchor; leave room to clear client-only state here if needed
        console.log("Logging out");
    };

    return (
        <button
            className="px-5 py-2 bg-white text-gray-400 rounded-xl text-base font-medium hover:bg-gray-400 transition"
            onClick={handleClick}>
            <a href="/auth/logout">Logout</a>
        </button>
    )
}

