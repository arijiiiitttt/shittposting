"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Fooder from '@/components/Base/Fooder';

const PasswordPg = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const correctPassword = '@Arijit098';

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem('authenticated');
        if (isAuthenticated) {
            window.location.href = 'https://drive.google.com/drive/folders/1TyIM7fvXr4Zm0s4hnSn5fUaEpHIyoWVG?usp=drive_link';
        }
    }, [router]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            sessionStorage.setItem('authenticated', 'true');
            window.location.href = 'https://drive.google.com/drive/folders/1TyIM7fvXr4Zm0s4hnSn5fUaEpHIyoWVG?usp=drive_link';
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center content-center">
                <h2 className="text-lg font-serif font-bold mb-4">Enter Password👇🏻 </h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                    <input
                        className="border-2 border-gray-950 rounded-lg p-2 w-64"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="bg-red-500 border-1 shadow-md shadow-red-400 hover:shadow-gray-600 border-white text-white px-4 py-1 rounded-lg hover:bg-gray-950"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>

            <Fooder />
        </>
    );
};

export default PasswordPg;
