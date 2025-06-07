import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "../../test/test-utils";
import { useLanguage, LanguageProvider } from "../useLanguage";
import { createLocalStorageMock } from "../../test/test-utils";

describe("useLanguage Hook", () => {
  let localStorageMock: ReturnType<typeof createLocalStorageMock>;

  beforeEach(() => {
    localStorageMock = createLocalStorageMock();
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
      writable: true
    });
  });

  describe("Initialization", () => {
    it("should initialize with Portuguese as default language", () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      });

      expect(result.current.currentLanguage).toBe("pt");
    });

    it("should provide list of available languages", () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      });

      expect(result.current.languages).toEqual([
        { code: "pt", name: "Português", flag: "🇧🇷", nativeName: "Português" },
        { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" }
      ]);
    });
  });

  describe("Language Change", () => {
    it("should change language to English", () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      });

      act(() => {
        result.current.changeLanguage("en");
      });

      expect(result.current.currentLanguage).toBe("en");
    });

    it("should change language to Portuguese", () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      });

      act(() => {
        result.current.changeLanguage("en");
      });

      act(() => {
        result.current.changeLanguage("pt");
      });

      expect(result.current.currentLanguage).toBe("pt");
    });
  });

  describe("Translation Function", () => {
    it("should return Portuguese translation", () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      });

      const translation = result.current.t("nav.home");
      expect(translation).toBe("Home");
    });

    it("should return English translation", () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      });

      act(() => {
        result.current.changeLanguage("en");
      });

      const translation = result.current.t("nav.home");
      expect(translation).toBe("Home");
    });

    it("should return key if translation does not exist", () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      });

      const translation = result.current.t("inexistent.key");
      expect(translation).toBe("inexistent.key");
    });

    it("should support nested translations", () => {
      const { result } = renderHook(() => useLanguage(), {
        wrapper: LanguageProvider
      });

      const translation = result.current.t("nav.guides");
      expect(translation).toBe("Guias");
    });
  });

  describe("Error Handling", () => {
    it("should throw error when used outside provider", () => {
      expect(() => {
        renderHook(() => useLanguage());
      }).toThrow("useLanguage must be used within a LanguageProvider");
    });
  });
});
