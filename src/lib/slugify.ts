/**
 * Génère un slug URL-friendly à partir d'un titre.
 *
 * Transformations appliquées dans l'ordre :
 * 1. `normalize("NFD")` + suppression des diacritiques → "éàü" devient "eau"
 * 2. Mise en minuscules
 * 3. Suppression des espaces de début/fin
 * 4. Suppression des caractères non alphanumériques (sauf espaces et tirets)
 * 5. Remplacement des espaces par des tirets
 * 6. Fusion des tirets consécutifs en un seul
 *
 * @example
 * generateSlug("Mon Article : L'été !")
 * // → "mon-article-lete"
 */
export function generateSlug(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // supprime les diacritiques (accents, cédilles…)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // supprime la ponctuation et caractères spéciaux
    .replace(/\s+/g, "-")          // espaces → tirets
    .replace(/-+/g, "-");          // tirets multiples → un seul tiret
}
