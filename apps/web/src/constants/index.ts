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

// Stay Constants
export const STAY_TYPES = [
  { id: "house", name: "Casa", iconName: "🏠" },
  { id: "apartment", name: "Apartamento", iconName: "🏢" },
  { id: "cabin", name: "Cabana", iconName: "🏕️" },
  { id: "room", name: "Quarto", iconName: "🛏️" }
] as const;

export const NEIGHBORHOODS = [
  { id: "cidadeVelha", name: "Cidade Velha" },
  { id: "centro", name: "Centro" },
  { id: "nazare", name: "Nazaré" },
  { id: "umarizal", name: "Umarizal" },
  { id: "batista", name: "Batista Campos" },
  { id: "jurunas", name: "Jurunas" },
  { id: "ilhaDoCombu", name: "Ilha do Combu" }
] as const;

export const PRICE_RANGES = [
  { id: "budget", min: 30, max: 80, label: "Econômico (R$ 30-80)" },
  { id: "mid", min: 80, max: 150, label: "Intermediário (R$ 80-150)" },
  { id: "premium", min: 150, max: 300, label: "Premium (R$ 150-300)" },
  { id: "luxury", min: 300, max: 2000, label: "Luxo (R$ 300+)" }
] as const;

// Price slider configuration
export const PRICE_SLIDER_CONFIG = {
  min: 100,
  max: 1000,
  step: 50,
  defaultValue: [100, 400] as [number, number],
  marks: [
    { value: 100, label: "R$ 100" },
    { value: 250, label: "R$ 250" },
    { value: 400, label: "R$ 400" },
    { value: 600, label: "R$ 600" },
    { value: 800, label: "R$ 800" },
    { value: 1000, label: "R$ 1000" }
  ]
};

// Helper functions
export const getStayTypeIcon = (type: string): string => {
  const stayType = STAY_TYPES.find((t) => t.id === type);
  return stayType?.iconName || "🏠";
};

export const getNeighborhoodName = (id: string): string => {
  const neighborhood = NEIGHBORHOODS.find((n) => n.id === id);
  return neighborhood?.name || id;
};
