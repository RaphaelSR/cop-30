import { mockListings } from "@/data/listings";
import { type StayFilters } from "@/types/stay";
import { PRICE_SLIDER_CONFIG } from "@/constants";
import { useFilters } from "./useFilters";

interface UseStayProps {
  currentPage?: number;
  itemsPerPage?: number;
}

export const useStay = ({
  currentPage = 1,
  itemsPerPage = 6
}: UseStayProps = {}) => {
  const listings = mockListings;

  const defaultFilters: StayFilters = {
    search: "",
    neighborhood: null,
    type: [],
    priceRange: PRICE_SLIDER_CONFIG.defaultValue,
    capacity: 1,
    verifiedHost: false
  };

  const filterLogic = (
    listing: (typeof mockListings)[0],
    filters: StayFilters
  ) => {
    if (
      filters.search &&
      !listing.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      !listing.description
        .toLowerCase()
        .includes(filters.search.toLowerCase()) &&
      !listing.neighborhood
        .toLowerCase()
        .includes(filters.search.toLowerCase()) &&
      !listing.host.name.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    if (filters.neighborhood && listing.neighborhood !== filters.neighborhood) {
      return false;
    }

    if (filters.type.length > 0 && !filters.type.includes(listing.type)) {
      return false;
    }

    const [minPrice, maxPrice] = filters.priceRange;
    if (listing.price < minPrice || listing.price > maxPrice) {
      return false;
    }

    if (filters.capacity > 1 && listing.capacity < filters.capacity) {
      return false;
    }

    if (filters.verifiedHost && !listing.host.verified) {
      return false;
    }

    return true;
  };

  const {
    filteredItems,
    paginatedItems,
    totalItems,
    totalPages,
    filters,
    updateFilters,
    clearFilters,
    hasActiveFilters
  } = useFilters({
    items: listings,
    initialFilters: defaultFilters,
    filterFn: filterLogic,
    currentPage,
    itemsPerPage
  });

  return {
    filteredListings: paginatedItems,
    allListings: filteredItems,
    totalListings: totalItems,
    totalPages,
    currentPage,
    itemsPerPage,
    filters,
    updateFilters,
    clearFilters,
    hasActiveFilters
  };
};
