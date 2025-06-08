import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "../../../test/test-utils";
import { GuideCard } from "../GuideCard";
import { TourGuide } from "../../../types/guides";

const mockGuide: TourGuide = {
  id: "1",
  name: "João Silva",
  photo: "https://example.com/photo.jpg",
  description: "Guia especializado em turismo cultural em Belém",
  languages: ["Português", "English"],
  category: "cultural",
  rating: 4.8,
  verified: true,
  free: true,
  contact: "joao@example.com",
  schedule: {
    days: ["Segunda", "Terça"],
    time: "08:00 - 18:00",
    location: "Centro Histórico de Belém"
  }
};

describe("GuideCard Component", () => {
  const mockOnViewDetails = vi.fn();

  beforeEach(() => {
    mockOnViewDetails.mockClear();
  });

  describe("Basic Rendering", () => {
    it("should render guide information", () => {
      render(
        <GuideCard
          guide={mockGuide}
          onViewDetails={mockOnViewDetails}
        />
      );

      expect(screen.getByText("João Silva")).toBeInTheDocument();
      expect(
        screen.getByText("Guia especializado em turismo cultural em Belém")
      ).toBeInTheDocument();
    });

    it("should render guide image", () => {
      render(
        <GuideCard
          guide={mockGuide}
          onViewDetails={mockOnViewDetails}
        />
      );

      const image = screen.getByAltText("João Silva");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", "https://example.com/photo.jpg");
    });

    it("should render language badges", () => {
      render(
        <GuideCard
          guide={mockGuide}
          onViewDetails={mockOnViewDetails}
        />
      );

      expect(screen.getByText("Português, English")).toBeInTheDocument();
    });
  });

  describe("Badges and Status", () => {
    it("should show free badge when guide is free", () => {
      render(
        <GuideCard
          guide={mockGuide}
          onViewDetails={mockOnViewDetails}
        />
      );

      expect(screen.getByText(/gratuito/i)).toBeInTheDocument();
    });

    it("should show verified badge when guide is verified", () => {
      render(
        <GuideCard
          guide={mockGuide}
          onViewDetails={mockOnViewDetails}
        />
      );

      expect(screen.getByText(/verificado/i)).toBeInTheDocument();
    });

    it("should show rating when available", () => {
      render(
        <GuideCard
          guide={mockGuide}
          onViewDetails={mockOnViewDetails}
        />
      );

      expect(screen.getByText("4.8")).toBeInTheDocument();
    });

    it("should not show badges when guide is not free or verified", () => {
      const paidGuide = { ...mockGuide, free: false, verified: false };

      render(
        <GuideCard
          guide={paidGuide}
          onViewDetails={mockOnViewDetails}
        />
      );

      expect(screen.queryByText(/gratuito/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/verificado/i)).not.toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    it("should call onViewDetails when view details button is clicked", () => {
      render(
        <GuideCard
          guide={mockGuide}
          onViewDetails={mockOnViewDetails}
        />
      );

      const viewDetailsButton = screen.getByText(/ver detalhes/i);
      viewDetailsButton.click();

      expect(mockOnViewDetails).toHaveBeenCalledWith(mockGuide);
    });

    it("should call onViewDetails when card is clicked", () => {
      render(
        <GuideCard
          guide={mockGuide}
          onViewDetails={mockOnViewDetails}
        />
      );

      const card = screen.getByRole("button");
      card.click();

      expect(mockOnViewDetails).toHaveBeenCalledWith(mockGuide);
    });
  });

  describe("Category Display", () => {
    it("should show cultural category", () => {
      render(
        <GuideCard
          guide={mockGuide}
          onViewDetails={mockOnViewDetails}
        />
      );

      // O texto da categoria vem das especialidades ou da tradução
      expect(screen.getByText(/cultural/i)).toBeInTheDocument();
    });

    it("should show different category for gastronomic guides", () => {
      const gastronomicGuide = {
        ...mockGuide,
        category: "gastronomic" as const,
        specialties: ["Gastronomia Regional"]
      };

      render(
        <GuideCard
          guide={gastronomicGuide}
          onViewDetails={mockOnViewDetails}
        />
      );

      expect(screen.getByText("Gastronomia Regional")).toBeInTheDocument();
    });
  });
});
