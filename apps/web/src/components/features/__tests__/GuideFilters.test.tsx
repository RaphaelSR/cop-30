import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "../../../test/test-utils";
import GuideFilters from "../GuideFilters";
import { GuideFilters as GuideFiltersType } from "../../../types/guides";

const mockFilters: GuideFiltersType = {
  search: "",
  languages: [],
  category: undefined,
  free: undefined
};

describe("GuideFilters", () => {
  const mockOnFiltersChange = vi.fn();

  beforeEach(() => {
    mockOnFiltersChange.mockClear();
  });

  describe("Basic Rendering", () => {
    it("should render search input", () => {
      render(
        <GuideFilters
          filters={mockFilters}
          onFiltersChange={mockOnFiltersChange}
          totalResults={10}
        />
      );

      expect(screen.getByPlaceholderText(/buscar/i)).toBeInTheDocument();
    });

    it("should render results count", () => {
      render(
        <GuideFilters
          filters={mockFilters}
          onFiltersChange={mockOnFiltersChange}
          totalResults={5}
        />
      );

      expect(screen.getByText(/5.*guia/i)).toBeInTheDocument();
    });

    it("should render free filter button", () => {
      render(
        <GuideFilters
          filters={mockFilters}
          onFiltersChange={mockOnFiltersChange}
          totalResults={10}
        />
      );

      expect(screen.getByText(/apenas gratuitos/i)).toBeInTheDocument();
    });
  });

  describe("Search Functionality", () => {
    it("should call onFiltersChange when search input changes", () => {
      render(
        <GuideFilters
          filters={mockFilters}
          onFiltersChange={mockOnFiltersChange}
          totalResults={10}
        />
      );

      const searchInput = screen.getByPlaceholderText(/buscar/i);
      fireEvent.change(searchInput, { target: { value: "joão" } });

      expect(mockOnFiltersChange).toHaveBeenCalledWith({
        ...mockFilters,
        search: "joão"
      });
    });

    it("should display current search value", () => {
      const filtersWithSearch = { ...mockFilters, search: "cultural" };

      render(
        <GuideFilters
          filters={filtersWithSearch}
          onFiltersChange={mockOnFiltersChange}
          totalResults={10}
        />
      );

      const searchInput = screen.getByDisplayValue("cultural");
      expect(searchInput).toBeInTheDocument();
    });
  });

  describe("Free Filter", () => {
    it("should toggle free filter when button is clicked", () => {
      render(
        <GuideFilters
          filters={mockFilters}
          onFiltersChange={mockOnFiltersChange}
          totalResults={10}
        />
      );

      const freeButton = screen.getByText(/apenas gratuitos/i);
      fireEvent.click(freeButton);

      expect(mockOnFiltersChange).toHaveBeenCalledWith({
        ...mockFilters,
        free: true
      });
    });

    it("should show active state when free filter is applied", () => {
      const filtersWithFree = { ...mockFilters, free: true };

      render(
        <GuideFilters
          filters={filtersWithFree}
          onFiltersChange={mockOnFiltersChange}
          totalResults={10}
        />
      );

      const freeButton = screen.getByText(/apenas gratuitos/i);
      expect(freeButton).toHaveAttribute("data-variant", "filled");
    });
  });

  describe("Expanded Filters", () => {
    it("should show/hide expanded filters when toggle button is clicked", () => {
      render(
        <GuideFilters
          filters={mockFilters}
          onFiltersChange={mockOnFiltersChange}
          totalResults={10}
        />
      );

      const toggleButton = screen.getByText(/mostrar filtros/i);
      expect(screen.queryByText(/categorias/i)).not.toBeInTheDocument();

      fireEvent.click(toggleButton);
      expect(screen.getByText(/categorias/i)).toBeInTheDocument();
      expect(screen.getByText(/idiomas/i)).toBeInTheDocument();
    });

    it("should change button text when filters are expanded", () => {
      render(
        <GuideFilters
          filters={mockFilters}
          onFiltersChange={mockOnFiltersChange}
          totalResults={10}
        />
      );

      const toggleButton = screen.getByText(/mostrar filtros/i);
      fireEvent.click(toggleButton);

      expect(screen.getByText(/ocultar filtros/i)).toBeInTheDocument();
      expect(screen.queryByText(/mostrar filtros/i)).not.toBeInTheDocument();
    });
  });

  describe("Clear Filters", () => {
    it("should show clear button when filters are active", () => {
      const activeFilters = {
        ...mockFilters,
        search: "test",
        free: true
      };

      render(
        <GuideFilters
          filters={activeFilters}
          onFiltersChange={mockOnFiltersChange}
          totalResults={10}
        />
      );

      expect(screen.getByText(/limpar/i)).toBeInTheDocument();
    });

    it("should not show clear button when no filters are active", () => {
      render(
        <GuideFilters
          filters={mockFilters}
          onFiltersChange={mockOnFiltersChange}
          totalResults={10}
        />
      );

      expect(screen.queryByText(/limpar/i)).not.toBeInTheDocument();
    });

    it("should clear all filters when clear button is clicked", () => {
      const activeFilters = {
        search: "test",
        languages: ["Português"],
        category: "cultural" as const,
        free: true
      };

      render(
        <GuideFilters
          filters={activeFilters}
          onFiltersChange={mockOnFiltersChange}
          totalResults={10}
        />
      );

      const clearButton = screen.getByText(/limpar/i);
      fireEvent.click(clearButton);

      expect(mockOnFiltersChange).toHaveBeenCalledWith({
        languages: [],
        free: undefined,
        category: undefined,
        search: ""
      });
    });
  });
});
