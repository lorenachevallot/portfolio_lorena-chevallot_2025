import PocketBase from "pocketbase";

// Détection de l'environnement
// En développement (serveur Astro), utiliser localhost
// En production, utiliser l'URL de production
const isDev = import.meta.env.DEV;
const baseUrl = isDev
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