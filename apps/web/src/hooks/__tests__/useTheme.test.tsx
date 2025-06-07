import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "../../test/test-utils";
import { useTheme, ThemeProvider } from "../useTheme";
import { createLocalStorageMock, mockMatchMedia } from "../../test/test-utils";

describe("useTheme Hook", () => {
  let localStorageMock: ReturnType<typeof createLocalStorageMock>;

  beforeEach(() => {
    localStorageMock = createLocalStorageMock();
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
      writable: true
    });

    Object.defineProperty(window, "matchMedia", {
      value: mockMatchMedia(false),
      writable: true
    });
  });

  describe("Initialization", () => {
    it("should initialize with light theme by default", () => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      });

      expect(result.current.theme).toBe("light");
      expect(result.current.isDarkMode).toBe(false);
    });

    it("should load saved theme from localStorage", () => {
      localStorageMock.getItem.mockReturnValue("dark");

      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      });

      expect(result.current.theme).toBe("dark");
      expect(result.current.isDarkMode).toBe(true);
    });

    it("should detect system preference when no saved theme", () => {
      Object.defineProperty(window, "matchMedia", {
        value: mockMatchMedia(true),
        writable: true
      });

      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      });

      expect(result.current.theme).toBe("dark");
    });

    it("should use light theme if system does not prefer dark", () => {
      Object.defineProperty(window, "matchMedia", {
        value: mockMatchMedia(false),
        writable: true
      });

      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      });

      expect(result.current.theme).toBe("light");
    });
  });

  describe("Theme Change", () => {
    it("should change theme to dark", () => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      });

      act(() => {
        result.current.setTheme("dark");
      });

      expect(result.current.theme).toBe("dark");
      expect(result.current.isDarkMode).toBe(true);
    });

    it("should change theme to light", () => {
      localStorageMock.getItem.mockReturnValue("dark");

      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      });

      act(() => {
        result.current.setTheme("light");
      });

      expect(result.current.theme).toBe("light");
      expect(result.current.isDarkMode).toBe(false);
    });

    it("should toggle between themes", () => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      });

      expect(result.current.theme).toBe("light");

      act(() => {
        result.current.toggleTheme();
      });

      expect(result.current.theme).toBe("dark");

      act(() => {
        result.current.toggleTheme();
      });

      expect(result.current.theme).toBe("light");
    });
  });

  describe("Persistence", () => {
    it("should save theme to localStorage when changed", () => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      });

      act(() => {
        result.current.setTheme("dark");
      });

      expect(localStorageMock.setItem).toHaveBeenCalledWith("theme", "dark");
    });

    it("should save theme to localStorage when toggled", () => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      });

      act(() => {
        result.current.toggleTheme();
      });

      expect(localStorageMock.setItem).toHaveBeenCalledWith("theme", "dark");
    });
  });

  describe("Computed States", () => {
    it("should calculate isDarkMode correctly", () => {
      const { result } = renderHook(() => useTheme(), {
        wrapper: ThemeProvider
      });

      expect(result.current.isDarkMode).toBe(false);

      act(() => {
        result.current.setTheme("dark");
      });

      expect(result.current.isDarkMode).toBe(true);
    });
  });

  describe("Error Handling", () => {
    it("should throw error when used outside provider", () => {
      expect(() => {
        renderHook(() => useTheme());
      }).toThrow("useTheme must be used within a ThemeProvider");
    });
  });
});
