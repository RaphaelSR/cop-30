export type Language = "pt" | "en";

export interface LanguageInfo {
  code: Language;
  name: string;
  flag: string;
  nativeName: string;
}

export const languages: LanguageInfo[] = [
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

export const STORAGE_KEYS = {
  language: "cop30_language",
  theme: "cop30_theme",
  user: "cop30_user"
} as const;

export const THEMES = {
  light: "light",
  dark: "dark"
} as const;

export type Theme = (typeof THEMES)[keyof typeof THEMES];
