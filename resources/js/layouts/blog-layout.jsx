// resources/js/layouts/blog-layout.jsx
import React from 'react';
// import BlogHeader from '@/components/ui/blog-header'; // futur header 🫶
// import NavFooter from '@/components/ui/nav-footer'; // futur footer
import { Head } from '@inertiajs/react';

export default function BlogLayout({ children, title = 'Info-Endo'  }) {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-800">
        <Head title={title} />
        {/* <BlogHeader /> */}

        <main className="flex-grow container mx-auto px-4 py-6">
        {children}
        </main>

        {/* <NavFooter /> */}
    </div>
    );
}
