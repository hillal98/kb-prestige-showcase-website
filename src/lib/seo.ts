import { useEffect } from "react";

const BASE = "KB PRESTIGE";

export function useSEO(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} — ${BASE}`;

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", description);
      }
    }
  }, [title, description]);
}
