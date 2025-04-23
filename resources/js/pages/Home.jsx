import React from 'react';
import { usePage } from '@inertiajs/react';
import BlogLayout from '@/layouts/blog-layout';
import StatCard from '@/components/ui/StatCard';
import { useEffect, useState } from 'react';



export default function Home() {
    const { stats, wikipedia, video } = usePage().props;

    const extractYoutubeId = (url) => {
        try {
            const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/;
            const match = url.match(regExp);
            return match ? match[1] : null;
        } catch {
            return null;
        }
        };
      
        const videoId = extractYoutubeId(video);
      

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (wikipedia) {
            setLoading(false);
        }
    }, 
        [wikipedia]);

    return (
    
    <BlogLayout title="Accueil - Info-Endo">
        <div className="space-y-8" >
            <section>
                <h1 className="text-3xl font-semibold">Bienvenue sur Info-Endo</h1>
                <p className="mt-4">Ton espace d’infos, de témoignages, et de soutien 💛</p>
            </section>

{/* statistiques */}
            <section>       
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} />
                ))}
                </div>
            </section>

{/* extrait Wikipédia */}

            <section>
                <h2 className="text-2xl font-semibold mb-4">C’est quoi l’endométriose ?</h2>
                {loading ? (
                    <div className="animate-pulse bg-yellow-100 p-4 rounded text-sm text-gray-500">
                        Chargement de l’extrait Wikipédia...
                    </div>
                ) : (
                    <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 text-sm text-gray-700 space-y-2">
                        <p>{wikipedia}</p>
                        <a
                            href="https://fr.wikipedia.org/wiki/Endométriose"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-700 underline text-xs"
                        >
                            Lire l’article complet sur Wikipédia
                        </a>
                    </div>
                )}
            </section>

{/* vidéo explicative */}
{/* Vidéo informative */}
<section>
    <h2 className="text-2xl font-semibold mb-4">En vidéo</h2>
    {videoId ? (
    <>
        <div className="aspect-w-16 aspect-h-9">
            <iframe
                className="w-full rounded-lg shadow-md"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Vidéo sur l’endométriose"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>

        <p className="text-sm text-gray-600 mt-2">
            Cette vidéo, produite par <strong>ARTE</strong>, aborde de manière claire les causes, symptômes et impacts de l’endométriose. Une ressource essentielle pour sensibiliser et mieux comprendre cette maladie chronique souvent ignorée.
        </p>
    </>
    ) : (
        <p className="text-sm text-gray-500">Vidéo indisponible ou URL incorrecte.</p>
    )}
</section>



{/* Carte (à venir) */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Carte de l’impact</h2>
                <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500 italic">
            (Carte à venir prochainement 🗺️)
                </div>
            </section>
        </div>
    </BlogLayout>
);
}
