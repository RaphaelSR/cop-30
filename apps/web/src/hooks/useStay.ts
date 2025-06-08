import { useMemo } from "react";
import { mockListings } from "../data/listings";
import { type StayFilters } from "../types/stay";

interface UseStayProps {
  filters: StayFilters;
  currentPage?: number;
  itemsPerPage?: number;
}

export const useStay = ({
  filters,
  currentPage = 1,
  itemsPerPage = 6
}: UseStayProps) => {
  const listings = mockListings;

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
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

      if (
        filters.neighborhood &&
        listing.neighborhood !== filters.neighborhood
      ) {
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
    });
  }, [listings, filters]);

  const paginatedListings = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredListings.slice(startIndex, endIndex);
  }, [filteredListings, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);

  return {
    filteredListings: paginatedListings,
    totalListings: filteredListings.length,
    totalPages,
    currentPage,
    itemsPerPage
  };
};
