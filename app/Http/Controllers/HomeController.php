<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $response = Http::get('https://fr.wikipedia.org/api/rest_v1/page/summary/Endométriose');

        $wikipedia = $response->ok()
            ? $response->json('extract')
            : "Impossible de charger l’extrait Wikipédia pour le moment.";


        return Inertia::render('Home', [
            'stats' => [
                ['value' => '1 femme sur 10', 'label' => "souffre d'endométriose"],
                ['value' => '7 ans', 'label' => "de délai moyen pour un diagnostic"],
                ['value' => '2,5 millions', 'label' => "de femmes touchées en France"],
            ],
            'wikipedia' => $wikipedia,
            'video' => 'https://www.youtube.com/watch?v=YwDbNMaWmO8',
        ]);
    }
}
