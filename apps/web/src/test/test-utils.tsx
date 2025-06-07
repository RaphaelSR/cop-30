import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { LanguageProvider } from "../hooks/useLanguage";
import { ThemeProvider } from "../hooks/useTheme";
import { MantineThemeProvider } from "../providers/MantineThemeProvider";

/**
 * Wrapper customizado para testes que inclui todos os providers necessários
 * Segue o princípio DRY - Define uma vez, usa em todos os testes
 */
interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MantineThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </MantineThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

/**
 * Função de render customizada que inclui todos os providers e user events
 * Implementa Single Responsability Principle - apenas renderiza com contexto
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  const user = userEvent.setup();
  const result = render(ui, { wrapper: AllTheProviders, ...options });
  return { ...result, user };
};

/**
 * Factory para criar mocks de localStorage de forma consistente
 * Segue o princípio DRY e Factory Pattern
 */
export const createLocalStorageMock = () => {
  const store: Record<string, string> = {};

  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      Object.keys(store).forEach((key) => delete store[key]);
    }),
    get store() {
      return { ...store };
    }
  };
};

/**
 * Utilitário para mockar matchMedia de forma consistente
 * Implementa Dependency Injection Pattern
 */
export const mockMatchMedia = (matches: boolean = false) => {
  return vi.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }));
};

/**
 * Helper para aguardar mudanças de estado assíncronas
 * Implementa Single Responsability Principle
 */
export const waitForStateChange = async (
  callback: () => void,
  timeout = 1000
) => {
  return new Promise<void>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(
        new Error(`Timeout aguardando mudança de estado após ${timeout}ms`)
      );
    }, timeout);

    const interval = setInterval(() => {
      try {
        callback();
        clearInterval(interval);
        clearTimeout(timer);
        resolve();
      } catch {
        // Continue trying until timeout
      }
    }, 50);
  });
};

// Re-export everything
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

// Override render method
export { customRender as render };
