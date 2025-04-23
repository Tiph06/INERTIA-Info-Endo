import React from 'react';

export default function StatCard({ value, label }) {
    return (
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 shadow-md text-center w-full md:w-auto">
            <p className="text-xl font-bold text-pink-700">{value}</p>
            <p className="text-sm text-gray-700">{label}</p>
        </div>
    );
}
