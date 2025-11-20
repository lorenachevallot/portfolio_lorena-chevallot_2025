import PocketBase from "pocketbase";

// Détection de l'environnement
const isBrowser = typeof window !== "undefined";
const PUBLIC_PB_URL = "https://portfolio.lorena-chevallot.fr";
const INTERNAL_URL = "http://127.0.0.1:8090";
const DEV_URL = "http://127.0.0.1:8090";

const envUrl =
    typeof process !== "undefined" && process.env?.POCKETBASE_URL
        ? process.env.POCKETBASE_URL
        : null;

const isDevMode =
    typeof process !== "undefined" &&
    (process.env?.NODE_ENV === "development" ||
        process.env?.ASTRO_BUILDTIME === "false");

const baseUrl = isBrowser
    ? PUBLIC_PB_URL
    : envUrl || (isDevMode ? DEV_URL : INTERNAL_URL);

export const pb = new PocketBase(baseUrl);

export const getFileUrl = (collectionId, recordId, filename) => {
    if (!filename) return null;
    const fileBaseUrl = isDevMode ? DEV_URL : PUBLIC_PB_URL;
    return `${fileBaseUrl}/api/files/${collectionId}/${recordId}/${filename}`;
};

export const getFileUrlWithCache = (
    collectionId,
    recordId,
    filename,
    updated
) => {
    if (!filename) return null;
    const fileBaseUrl = isDevMode ? DEV_URL : PUBLIC_PB_URL;
    const timestamp = updated ? new Date(updated).getTime() : Date.now();
    return `${fileBaseUrl}/api/files/${collectionId}/${recordId}/${filename}?t=${timestamp}`;
};

const COLLECTION_PROJETS = "projets";

const formatProjet = (projet) => {
    // Fonction helper pour générer les URLs d'images
    const getImg = (field) =>
        getFileUrlWithCache(COLLECTION_PROJETS, projet.id, projet[field], projet.updated);

    return {
        id: projet.id,
        collectionId: projet.collectionId,
        nom: projet.nom || "",
        description: projet.description || "",
        contexte: projet.contexte || "",
        pourquoi: projet.pourquoi || "",
        sloggan: projet.sloggan || "",
        ellipse: projet.ellipse || "",
        logo: getImg("logo"),
        couleurs_originelles: projet.couleurs_originelles || "",
        couleurs: projet.couleurs || "",
        typo_nom: projet.typo_nom || "",
        typo: projet.typo || {},
        logiciels: projet.logiciels || [],
        mockups: (projet.mockups || []).map((filename) =>
            getFileUrlWithCache(COLLECTION_PROJETS, projet.id, filename, projet.updated)
        ),
        livrable_image: getImg("livrable_image"),
        image_contexte: getImg("image_contexte"),
        image_pourquoi: getImg("image_pourquoi"),
        concept_visualisation: getImg("concept_visualisation"),
        recherche_logos: (projet.recherche_logos || []).map((filename) =>
            getFileUrlWithCache(COLLECTION_PROJETS, projet.id, filename, projet.updated)
        ),
        moodboard: getImg("moodboard"),
        maquette_visualisation: getImg("maquette_visualisation"),
        slug: projet.slug || "",
        created: projet.created,
        updated: projet.updated,
    };
};

export async function getProjets() {
    try {
        const records = await pb.collection(COLLECTION_PROJETS).getFullList({
            sort: "-created",
            requestKey: `all-projets-${Date.now()}`,
        });
        return records.map(formatProjet);
    } catch (err) {
        console.error("Erreur lors de la récupération des projets :", err);
        return [];
    }
}

export async function getProjetById(id) {
    try {
        const record = await pb.collection(COLLECTION_PROJETS).getOne(id);
        return formatProjet(record);
    } catch (err) {
        console.error("Erreur lors de la récupération du projet :", err);
        return null;
    }
}

export async function getProjetBySlug(slug) {
    try {
        const record = await pb
            .collection(COLLECTION_PROJETS)
            .getFirstListItem(`slug = "${slug}"`, {
                requestKey: `projet-${slug}-${Date.now()}`,
            });
        return formatProjet(record);
    } catch (err) {
        console.error(
            "Erreur lors de la récupération du projet par slug :",
            err
        );
        return null;
    }
}

export async function getLogicielById(id) {
    try {
        const record = await pb.collection("logiciels").getOne(id);
        return record;
    } catch (error) {
        console.error("Erreur lors de la récupération du logiciel:", error);
        return null;
    }
}

export function parseTypographies(projet) {
    let typoArray = [];
    if (projet && projet.typo) {
        const typoData = typeof projet.typo === "string" ? JSON.parse(projet.typo) : projet.typo;
        if (typoData.typography && Array.isArray(typoData.typography)) {
            typoArray = typoData.typography;
        }
    }
    return typoArray;
}

export async function getLogicielsDetails(projet) {
    let logicielsDetails = [];
    if (projet && projet.logiciels && projet.logiciels.length > 0) {
        const results = await Promise.all(
            projet.logiciels.map(async (logicielId) => {
                const logiciel = await getLogicielById(logicielId);
                return logiciel;
            }),
        );
        logicielsDetails = results.filter((l) => l !== null);
    }
    return logicielsDetails;
}

export function formatTypoName(typoName) {
    return typoName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join("+");
}

export function getTypoSize(name) {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("h1")) return "text-6xl";
    if (lowerName.includes("h2")) return "text-5xl";
    if (lowerName.includes("h3")) return "text-4xl";
    if (lowerName.includes("paragraph") || lowerName.includes("p"))
        return "text-2xl";
    if (lowerName.includes("accent")) return "text-3xl";
    return "text-4xl";
}