// resources/js/pages/Home.jsx
import React from 'react';
import BlogLayout from '@/layouts/blog-layout';

export default function Home() {
    return (
        <BlogLayout>
            <h1 className="text-3xl font-semibold">Bienvenue sur Info-Endo</h1>
            <p className="mt-4">Ton espace d’infos, de témoignages, et de soutien 💛</p>
        </BlogLayout>
    );
}
