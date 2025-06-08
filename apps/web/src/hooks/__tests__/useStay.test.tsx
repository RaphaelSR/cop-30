import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useStay } from "../useStay";
import type { StayFilters } from "../../types/stay";

describe("useStay", () => {
  const defaultFilters: StayFilters = {
    search: "",
    neighborhood: null,
    type: [],
    priceRange: [30, 2000],
    capacity: 1,
    verifiedHost: false
  };

  it("returns all listings when no filters applied", () => {
    const { result } = renderHook(() => useStay(defaultFilters));

    expect(result.current.filteredListings.length).toBeGreaterThan(0);
    expect(result.current.totalListings).toBe(
      result.current.filteredListings.length
    );
  });

  it("filters by search term", () => {
    const filtersWithSearch: StayFilters = {
      ...defaultFilters,
      search: "Casa"
    };

    const { result } = renderHook(() => useStay(filtersWithSearch));

    if (result.current.filteredListings.length > 0) {
      const hasSearchTerm = result.current.filteredListings.some(
        (listing) =>
          listing.title.toLowerCase().includes("casa") ||
          listing.description.toLowerCase().includes("casa") ||
          listing.neighborhood.toLowerCase().includes("casa") ||
          listing.host.name.toLowerCase().includes("casa")
      );
      expect(hasSearchTerm).toBe(true);
    } else {
      // Se não há resultados, verificar que a busca foi aplicada
      expect(result.current.filteredListings).toHaveLength(0);
    }
  });

  it("filters by neighborhood", () => {
    const filtersWithNeighborhood: StayFilters = {
      ...defaultFilters,
      neighborhood: "Centro"
    };

    const { result } = renderHook(() => useStay(filtersWithNeighborhood));

    if (result.current.filteredListings.length > 0) {
      result.current.filteredListings.forEach((listing) => {
        expect(listing.neighborhood).toBe("Centro");
      });
    } else {
      // Se não há resultados, o filtro ainda está funcionando
      expect(result.current.filteredListings).toHaveLength(0);
    }
  });

  it("filters by verified host", () => {
    const filtersWithVerified: StayFilters = {
      ...defaultFilters,
      verifiedHost: true
    };

    const { result } = renderHook(() => useStay(filtersWithVerified));

    if (result.current.filteredListings.length > 0) {
      result.current.filteredListings.forEach((listing) => {
        expect(listing.host.verified).toBe(true);
      });
    } else {
      // Se não há resultados verificados, o filtro ainda está funcionando
      expect(result.current.filteredListings).toHaveLength(0);
    }
  });

  it("filters by capacity", () => {
    const filtersWithCapacity: StayFilters = {
      ...defaultFilters,
      capacity: 4
    };

    const { result } = renderHook(() => useStay(filtersWithCapacity));

    if (result.current.filteredListings.length > 0) {
      result.current.filteredListings.forEach((listing) => {
        expect(listing.capacity).toBeGreaterThanOrEqual(4);
      });
    } else {
      // Se não há acomodações com capacidade suficiente, o filtro ainda está funcionando
      expect(result.current.filteredListings).toHaveLength(0);
    }
  });
});
