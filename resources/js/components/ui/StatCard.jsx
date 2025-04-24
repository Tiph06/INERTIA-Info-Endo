import React from 'react';

export default function StatCard({ title, value, icon: Icon, className = '' }) {
    return (
        <div className={`p-4 bg-white rounded shadow dark:bg-gray-800 ${className}`}>
            <div className="flex items-center">
                {Icon && <Icon className="h-6 w-6 text-blue-600 dark:text-blue-300 mr-2" />}
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</h4>
            </div>
            <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
    );
}
