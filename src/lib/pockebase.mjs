import PocketBase from "pocketbase";

const PUBLIC_PB_URL = "https://portfolio.lorena-chevallot.fr";

const pb = new PocketBase(PUBLIC_PB_URL);

export default pb;

export async function getProjets() {
  try {
    const records = await pb.collection("projets").getFullList({
      sort: "-created",
      requestKey: `all-projets-${Date.now()}`,
    });
    return records;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    return [];
  }
}

export async function getProjetById(id) {
  try {
    const record = await pb.collection("projets").getOne(id);
    return record;
  } catch (error) {
    console.error("Erreur lors de la récupération du projet:", error);
    return null;
  }
}

export async function getProjetBySlug(slug) {
  try {
    const record = await pb
      .collection("projets")
      .getFirstListItem(`slug = "${slug}"`, {
        requestKey: `projet-${slug}-${Date.now()}`,
      });
    return record;
  } catch (error) {
    console.error("Erreur lors de la récupération du projet par slug:", error);
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
    const typoData =
      typeof projet.typo === "string" ? JSON.parse(projet.typo) : projet.typo;
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
      })
    );
    logicielsDetails = results.filter((l) => l !== null);
  }
  return logicielsDetails;
}

export function getImageUrl(collectionId, recordId, filename) {
  if (!filename) return null;
  return `${PUBLIC_PB_URL}/api/files/${collectionId}/${recordId}/${filename}?token=`;
}

export function getImageUrlWithCache(
  collectionId,
  recordId,
  filename,
  updated
) {
  if (!filename) return null;
  const timestamp = updated ? new Date(updated).getTime() : Date.now();
  return `${PUBLIC_PB_URL}/api/files/${collectionId}/${recordId}/${filename}?token=&t=${timestamp}`;
}

export function getFileUrl(record, fieldName) {
  if (!record || !record[fieldName]) return null;
  return `${PUBLIC_PB_URL}/api/files/${record.collectionId}/${record.id}/${record[fieldName]}?token=`;
}

export function getFileUrlWithCache(record, fieldName) {
  if (!record || !record[fieldName]) return null;
  const timestamp = record.updated
    ? new Date(record.updated).getTime()
    : Date.now();
  return `${PUBLIC_PB_URL}/api/files/${record.collectionId}/${record.id}/${record[fieldName]}?token=&t=${timestamp}`;
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
