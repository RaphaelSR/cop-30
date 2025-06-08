import { GuideFilters } from "@/types/guides";
import { tourGuides } from "@/data/guides";
import { useFilters } from "./useFilters";

export const useGuides = () => {
  const defaultFilters: GuideFilters = {
    languages: [],
    free: undefined,
    category: undefined,
    search: ""
  };

  const filterLogic = (
    guide: (typeof tourGuides)[0],
    filters: GuideFilters
  ) => {
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
  };

  const {
    filteredItems: filteredGuides,
    filters,
    updateFilters,
    clearFilters,
    hasActiveFilters
  } = useFilters({
    items: tourGuides,
    initialFilters: defaultFilters,
    filterFn: filterLogic
  });

  return {
    guides: filteredGuides,
    allGuides: tourGuides,
    filters,
    updateFilters,
    clearFilters,
    hasActiveFilters,
    resultsCount: filteredGuides.length
  };
};
