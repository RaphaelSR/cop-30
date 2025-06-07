import { describe, it, expect, vi } from "vitest";
import { render, screen } from "../../test/test-utils";
import GuidesPage from "../GuidesPage";

// Mock dos hooks
vi.mock("../../hooks/useGuides", () => ({
  useGuides: () => ({
    guides: [
      {
        id: "1",
        name: "João Silva",
        photo: "https://example.com/photo.jpg",
        description: "Guia especializado em turismo cultural",
        languages: ["Português", "English"],
        category: "cultural",
        rating: 4.8,
        verified: true,
        free: true,
        contact: "joao@example.com",
        schedule: {
          time: "08:00 - 18:00",
          location: "Centro Histórico"
        }
      },
      {
        id: "2",
        name: "Maria Santos",
        photo: "https://example.com/photo2.jpg",
        description: "Especialista em gastronomia paraense",
        languages: ["Português", "Español"],
        category: "gastronomia",
        rating: 4.9,
        verified: true,
        free: false,
        contact: "+5591999999999",
        schedule: {
          time: "10:00 - 16:00",
          location: "Ver-o-Peso"
        }
      }
    ],
    filters: {
      search: "",
      languages: [],
      category: undefined,
      free: undefined
    },
    updateFilters: vi.fn(),
    resultsCount: 2
  })
}));

describe("GuidesPage", () => {
  describe("Basic Rendering", () => {
    it("should render page title", () => {
      render(<GuidesPage />);

      expect(screen.getByText(/guias e tradutores/i)).toBeInTheDocument();
    });

    it("should render page subtitle", () => {
      render(<GuidesPage />);

      expect(
        screen.getByText(/conecte-se com guias locais/i)
      ).toBeInTheDocument();
    });

    it("should render statistics cards", () => {
      render(<GuidesPage />);

      // Verifica se as estatísticas são renderizadas
      expect(screen.getByText("2")).toBeInTheDocument(); // Total guides
      expect(screen.getByText("1")).toBeInTheDocument(); // Free guides
      expect(screen.getByText("2")).toBeInTheDocument(); // Verified guides
      expect(screen.getByText("2")).toBeInTheDocument(); // Categories
    });
  });

  describe("Guide Cards", () => {
    it("should render guide cards", () => {
      render(<GuidesPage />);

      expect(screen.getByText("João Silva")).toBeInTheDocument();
      expect(screen.getByText("Maria Santos")).toBeInTheDocument();
    });

    it("should render guide descriptions", () => {
      render(<GuidesPage />);

      expect(
        screen.getByText("Guia especializado em turismo cultural")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Especialista em gastronomia paraense")
      ).toBeInTheDocument();
    });
  });

  describe("Filters Component", () => {
    it("should render filters component", () => {
      render(<GuidesPage />);

      expect(screen.getByPlaceholderText(/buscar/i)).toBeInTheDocument();
    });

    it("should show results count in filters", () => {
      render(<GuidesPage />);

      expect(screen.getByText(/2.*guia/i)).toBeInTheDocument();
    });
  });

  describe("Tips Section", () => {
    it("should render tips card", () => {
      render(<GuidesPage />);

      expect(
        screen.getByText(/dicas para contratar guias/i)
      ).toBeInTheDocument();
    });

    it("should render tip items", () => {
      render(<GuidesPage />);

      expect(
        screen.getByText(/sempre confirme disponibilidade/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/guias verificados passaram por processo/i)
      ).toBeInTheDocument();
    });
  });
});
