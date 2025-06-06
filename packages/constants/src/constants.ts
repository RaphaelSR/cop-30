// Languages
export const LANGUAGES = {
  pt: "pt",
  en: "en",
  es: "es"
} as const;

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];

// Theme modes
export const THEMES = {
  light: "light",
  dark: "dark"
} as const;

export type Theme = (typeof THEMES)[keyof typeof THEMES];

// App Constants
export const APP_CONFIG = {
  name: "COP30 Belém Hub",
  version: "1.0.0",
  defaultLanguage: LANGUAGES.pt,
  defaultTheme: THEMES.light
} as const;

// Routes
export const ROUTES = {
  home: "/",
  stay: "/stay",
  stayNew: "/stay/new",
  guides: "/guides",
  events: "/events",
  explore: "/explore"
} as const;

// API Endpoints (future use)
export const API_ENDPOINTS = {
  listings: "/api/listings",
  guides: "/api/guides",
  events: "/api/events",
  auth: "/api/auth"
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  language: "cop30_language",
  theme: "cop30_theme",
  user: "cop30_user"
} as const;

// Colors (Tailwind classes)
export const COLORS = {
  primary: {
    50: "bg-cop-green-50",
    100: "bg-cop-green-100",
    500: "bg-cop-green",
    600: "bg-cop-green-600",
    700: "bg-cop-green-700"
  },
  secondary: {
    50: "bg-cop-purple-50",
    100: "bg-cop-purple-100",
    500: "bg-cop-purple",
    600: "bg-cop-purple-600",
    700: "bg-cop-purple-700"
  }
} as const;

// Animations
export const ANIMATIONS = {
  fadeIn: "animate-fadeIn",
  slideUp: "animate-slideUp",
  bounce: "animate-bounce"
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
} as const;
