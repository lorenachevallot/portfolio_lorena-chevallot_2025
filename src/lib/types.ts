// Types pour les collections PocketBase

export interface LogicielRecord {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    nom: string;
    logo: string;
}

export interface ProjetRecord {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    slug: string;
    nom: string;
    typo_nom?: string;
    logo?: string;
    sloggan?: string;
    previsualisation?: string;
    ellipse?: string;
    contexte?: string;
    image_contexte?: string;
    contour_contexte?: string;
    titre_strat_1?: string;
    logo_strat_1?: string;
    texte_strat_1?: string;
    titre_strat_2?: string;
    logo_strat_2?: string;
    texte_strat_2?: string;
    titre_strat_3?: string;
    logo_strat_3?: string;
    texte_strat_3?: string;
    texte_logo?: string;
    contour_logo_final?: string;
    ancien_logo?: string;
    recherche_graphique?: string[];
    deuxieme_logo_final?: string;
    couleurs_originelles?: string;
    couleurs?: string;
    texte_couleurs?: string;
    typo?: string;
    moodboard?: string;
    livrable_texte?: string;
    livrable_image?: string;
    mockups?: string[];
    logiciels?: string[];
}
