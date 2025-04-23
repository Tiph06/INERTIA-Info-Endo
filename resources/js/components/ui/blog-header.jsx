// resources/js/components/ui/blog-header.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

export default function BlogHeader() {
    return (
        <header className="bg-pink-100 border-b border-pink-300 py-4 shadow-sm">
            <div className="container mx-auto flex justify-between items-center px-4">
            <Link href="/" className="text-2xl font-bold text-pink-600">
                Info-Endo 💛
            </Link>

            <nav className="space-x-4 text-sm">
                <Link href="/" className="hover:underline">Accueil</Link>
                <Link href="/temoignages" className="hover:underline">Témoignages</Link>
                <Link href="/articles" className="hover:underline">Articles</Link>
            </nav>
            </div>
        </header>
    );
}
