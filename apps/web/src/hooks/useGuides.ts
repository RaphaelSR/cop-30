import { useState, useMemo } from "react";
import { GuideFilters } from "../types/guides";
import { tourGuides } from "../data/guides";

export const useGuides = () => {
  const [filters, setFilters] = useState<GuideFilters>({
    languages: [],
    free: undefined,
    category: undefined,
    search: ""
  });

  const filteredGuides = useMemo(() => {
    return tourGuides.filter((guide) => {
      // Filtro por busca de texto
      if (filters.search && filters.search.trim()) {
        const searchTerm = filters.search.toLowerCase().trim();
        const matchesName = guide.name.toLowerCase().includes(searchTerm);
        const matchesDescription = guide.description
          .toLowerCase()
          .includes(searchTerm);
        const matchesLocation = guide.schedule.location
          .toLowerCase()
          .includes(searchTerm);

        if (!matchesName && !matchesDescription && !matchesLocation) {
          return false;
        }
      }

      // Filtro por idiomas
      if (filters.languages && filters.languages.length > 0) {
        const hasMatchingLanguage = filters.languages.some((lang) =>
          guide.languages.includes(lang)
        );
        if (!hasMatchingLanguage) {
          return false;
        }
      }

      // Filtro por gratuito/pago
      if (filters.free !== undefined) {
        if (guide.free !== filters.free) {
          return false;
        }
      }

      // Filtro por categoria
      if (filters.category && filters.category !== "all") {
        if (guide.category !== filters.category) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const updateFilters = (newFilters: GuideFilters) => {
    setFilters(newFilters);
  };

  return {
    guides: filteredGuides,
    allGuides: tourGuides,
    filters,
    updateFilters,
    resultsCount: filteredGuides.length
  };
};
