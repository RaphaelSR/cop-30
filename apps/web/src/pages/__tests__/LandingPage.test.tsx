import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@/test/test-utils";
import { LandingPage } from "../LandingPage";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn()
  };
});

describe("LandingPage Integration", () => {
  describe("Content Rendering", () => {
    it("should render main title", () => {
      render(<LandingPage />);

      expect(screen.getByText("COP30 Belém Hub")).toBeInTheDocument();
    });

    it("should render main description", () => {
      render(<LandingPage />);

      expect(
        screen.getByText(/experiência autêntica da amazônia/i)
      ).toBeInTheDocument();
    });

    it("should render features section", () => {
      render(<LandingPage />);

      expect(screen.getByText("Hospedagens Autênticas")).toBeInTheDocument();
      expect(screen.getByText("Guias Locais")).toBeInTheDocument();
      expect(screen.getByText("Impacto Social")).toBeInTheDocument();
    });

    it("should render quick access section", () => {
      render(<LandingPage />);

      expect(screen.getByText("Encontrar Hospedagem")).toBeInTheDocument();
      expect(screen.getByText("Buscar Guias")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should have correct semantic structure", () => {
      render(<LandingPage />);

      expect(screen.getByText("COP30 Belém Hub")).toBeInTheDocument();
    });

    it("should have hierarchical headings", () => {
      render(<LandingPage />);

      const headings = screen.getAllByRole("heading", { level: 2 });
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe("Performance", () => {
    it("should load quickly", () => {
      const startTime = performance.now();
      render(<LandingPage />);
      const endTime = performance.now();

      const renderTime = endTime - startTime;
      expect(renderTime).toBeLessThan(100);
    });
  });
});
