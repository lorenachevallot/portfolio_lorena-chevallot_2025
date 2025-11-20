import PocketBase from "pocketbase";

// Détection de l'environnement
// En développement et build, utiliser localhost
// En production runtime, utiliser l'URL de production
const isDev = import.meta.env.DEV;
const isSSR = import.meta.env.SSR;
const baseUrl = (isDev || isSSR)
    ? "http://127.0.0.1:8090"
    : "https://portfolio.lorena-chevallot.fr";

const pb = new PocketBase(baseUrl);

export default pb;

/**
 * Récupère tous les projets de la collection "projets"
 * @returns {Promise<Array>} Liste des projets
 */
export async function getProjets() {
    try {
        const records = await pb.collection("projets").getFullList({
            sort: "-created",
        });
        return records;
    } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
        return [];
    }
}

/**
 * Récupère un projet spécifique par son ID
 * @param {string} id - L'ID du projet
 * @returns {Promise<Object|null>} Le projet ou null si non trouvé
 */
export async function getProjetById(id) {
    try {
        const record = await pb.collection("projets").getOne(id);
        return record;
    } catch (error) {
        console.error("Erreur lors de la récupération du projet:", error);
        return null;
    }
}

/**
 * Récupère un projet spécifique par son slug
 * @param {string} slug - Le slug du projet
 * @returns {Promise<Object|null>} Le projet ou null si non trouvé
 */
export async function getProjetBySlug(slug) {
    try {
        const records = await pb.collection("projets").getFullList({
            filter: `slug = "${slug}"`,
        });
        return records.length > 0 ? records[0] : null;
    } catch (error) {
        console.error("Erreur lors de la récupération du projet par slug:", error);
        return null;
    }
}

/**
 * Récupère un logiciel spécifique par son ID
 * @param {string} id - L'ID du logiciel
 * @returns {Promise<Object|null>} Le logiciel ou null si non trouvé
 */
export async function getLogicielById(id) {
    try {
        const record = await pb.collection("logiciels").getOne(id);
        return record;
    } catch (error) {
        console.error("Erreur lors de la récupération du logiciel:", error);
        return null;
    }
}

/**
 * Parse les typographies d'un projet
 * @param {Object} projet - Le projet contenant les typographies
 * @returns {Array} Tableau des typographies avec name et fontFamily
 */
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

/**
 * Récupère les détails des logiciels d'un projet
 * @param {Object} projet - Le projet contenant les IDs des logiciels
 * @returns {Promise<Array>} Tableau des détails des logiciels
 */
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

/**
 * Génère l'URL d'une image PocketBase
 * @param {string} collectionId - L'ID de la collection
 * @param {string} recordId - L'ID de l'enregistrement
 * @param {string} filename - Le nom du fichier
 * @returns {string} L'URL complète de l'image
 */
export function getImageUrl(collectionId, recordId, filename) {
    return `${baseUrl}/api/files/${collectionId}/${recordId}/${filename}`;
}

/**
 * Formate le nom d'une typographie pour Google Fonts
 * @param {string} typoName - Le nom de la typographie
 * @returns {string} Le nom formaté
 */
export function formatTypoName(typoName) {
    return typoName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join("+");
}

/**
 * Détermine la taille CSS d'une typographie selon son type
 * @param {string} name - Le nom du type de typographie (h1, h2, etc.)
 * @returns {string} La classe Tailwind CSS pour la taille
 */
export function getTypoSize(name) {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('h1')) return 'text-6xl';
    if (lowerName.includes('h2')) return 'text-5xl';
    if (lowerName.includes('h3')) return 'text-4xl';
    if (lowerName.includes('paragraph') || lowerName.includes('p')) return 'text-2xl';
    if (lowerName.includes('accent')) return 'text-3xl';
    return 'text-4xl';
}