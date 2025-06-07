// Guide Categories Constants
export const GUIDE_CATEGORIES = [
  {
    id: "cultural",
    label: "Cultural",
    icon: "🎭"
  },
  {
    id: "nature",
    label: "Natureza",
    icon: "🌿"
  },
  {
    id: "gastronomic",
    label: "Gastronomia",
    icon: "🍽️"
  },
  {
    id: "historical",
    label: "História",
    icon: "🏛️"
  },
  {
    id: "adventure",
    label: "Aventura",
    icon: "🏞️"
  }
] as const;

export type GuideCategoryId = (typeof GUIDE_CATEGORIES)[number]["id"];

export function getCategoryIcon(categoryId: GuideCategoryId): string {
  const category = GUIDE_CATEGORIES.find((cat) => cat.id === categoryId);
  return category?.icon || "📍";
}

export function getCategoryLabel(categoryId: GuideCategoryId): string {
  const category = GUIDE_CATEGORIES.find((cat) => cat.id === categoryId);
  return category?.label || categoryId;
}

// Language Constants
export type Language = "pt" | "en";

export interface LanguageInfo {
  code: Language;
  name: string;
  flag: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  {
    code: "pt",
    name: "Português",
    flag: "🇧🇷",
    nativeName: "Português"
  },
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
    nativeName: "English"
  }
];

// Theme Constants
export const THEME_OPTIONS = {
  light: "light",
  dark: "dark"
} as const;

export type ThemeMode = (typeof THEME_OPTIONS)[keyof typeof THEME_OPTIONS];

// App Constants
export const APP_CONSTANTS = {
  name: "COP30 Belém Hub",
  version: "1.0.0",
  defaultLanguage: "pt" as Language,
  defaultTheme: "light" as ThemeMode,
  maxImageUploadSize: 5 * 1024 * 1024, // 5MB
  supportedImageTypes: ["image/jpeg", "image/png", "image/webp"]
} as const;

// Storage Keys
export const STORAGE_KEYS = {
  language: "cop30_language",
  theme: "cop30_theme",
  userPreferences: "cop30_preferences"
} as const;

// API Endpoints (for future use)
export const API_ENDPOINTS = {
  guides: "/api/guides",
  listings: "/api/listings",
  events: "/api/events",
  auth: "/api/auth"
} as const;

// Animation Constants
export const ANIMATIONS = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500
  },
  easing: {
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out"
  }
} as const;

// Breakpoints (matching Mantine defaults)
export const BREAKPOINTS = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400
} as const;
