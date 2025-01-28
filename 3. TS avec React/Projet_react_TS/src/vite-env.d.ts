/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_API_KEY: string;
    // Ajoute d'autres variables d'environnement ici si nécessaire
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}