import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useStay } from "../useStay";

describe("useStay", () => {
  it("returns all listings when no filters applied", () => {
    const { result } = renderHook(() => useStay());

    expect(result.current.filteredListings.length).toBeGreaterThan(0);
    expect(result.current.totalListings).toBe(
      result.current.filteredListings.length
    );
  });

  it("has pagination functionality", () => {
    const { result } = renderHook(() =>
      useStay({ currentPage: 1, itemsPerPage: 3 })
    );

    expect(result.current.filteredListings.length).toBeLessThanOrEqual(3);
    expect(result.current.totalPages).toBeGreaterThanOrEqual(1);
  });

  it("returns correct total listings count", () => {
    const { result } = renderHook(() => useStay());

    expect(result.current.totalListings).toBe(
      result.current.filteredListings.length
    );
  });
});
