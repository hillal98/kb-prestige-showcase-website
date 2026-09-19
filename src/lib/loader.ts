const KEY = "kb-prestige-loaded";

/** Vrai si le loader a déjà été affiché durant cette session. */
export const SKIP_LOADER: boolean = (() => {
  try {
    return !!sessionStorage.getItem(KEY);
  } catch {
    return false;
  }
})();

export function markLoaded() {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    /* stockage indisponible */
  }
}
