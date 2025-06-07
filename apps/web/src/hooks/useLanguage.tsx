import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from "react";
import {
  type Language,
  type LanguageInfo,
  languages,
  STORAGE_KEYS
} from "../constants/language";
import { translations } from "../../../../packages/constants/src/translations";

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
  languages: LanguageInfo[];
  t: (key: string) => string;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEYS.language) as Language;
      return stored && (stored === "pt" || stored === "en") ? stored : "pt";
    }
    return "pt";
  });

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.language, language);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.language, currentLanguage);
    }
  }, [currentLanguage]);

  const t = (key: string): string => {
    const keys = key.split(".");
    const translation = translations[currentLanguage];

    if (!translation) return key;

    let value: unknown = translation;
    for (const k of keys) {
      if (
        value &&
        typeof value === "object" &&
        k in (value as Record<string, unknown>)
      ) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    languages,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
