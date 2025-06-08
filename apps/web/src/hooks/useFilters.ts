import { useState, useMemo, useCallback } from "react";

export interface UseFiltersConfig<T, F> {
  items: T[];
  initialFilters: F;
  filterFn: (item: T, filters: F) => boolean;
  currentPage?: number;
  itemsPerPage?: number;
}

export interface UseFiltersResult<T, F> {
  filters: F;
  filteredItems: T[];
  paginatedItems: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  updateFilters: (newFilters: F) => void;
  clearFilters: () => void;
  hasActiveFilters: () => boolean;
  getActiveFiltersCount: (countFn: (filters: F) => number) => number;
}

/**
 * Hook reutilizável para lógica de filtros
 * Implementa o padrão DRY para funcionalidade comum de filtros
 */
export function useFilters<T, F extends Record<string, any>>({
  items,
  initialFilters,
  filterFn,
  currentPage = 1,
  itemsPerPage = 6
}: UseFiltersConfig<T, F>): UseFiltersResult<T, F> {
  const [filters, setFilters] = useState<F>(initialFilters);

  const filteredItems = useMemo(() => {
    return items.filter((item) => filterFn(item, filters));
  }, [items, filters, filterFn]);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  }, [filteredItems, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const updateFilters = useCallback((newFilters: F) => {
    setFilters(newFilters);
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  const hasActiveFilters = useCallback(() => {
    return JSON.stringify(filters) !== JSON.stringify(initialFilters);
  }, [filters, initialFilters]);

  const getActiveFiltersCount = useCallback(
    (countFn: (filters: F) => number) => {
      return countFn(filters);
    },
    [filters]
  );

  return {
    filters,
    filteredItems,
    paginatedItems,
    totalItems: filteredItems.length,
    totalPages,
    currentPage,
    itemsPerPage,
    updateFilters,
    clearFilters,
    hasActiveFilters,
    getActiveFiltersCount
  };
}
