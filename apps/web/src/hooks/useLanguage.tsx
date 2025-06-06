import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  Language,
  LanguageInfo,
  TranslationKeys,
  localTranslations,
  languages
} from "../constants/translations";

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
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt");

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: TranslationKeys | string = localTranslations[currentLanguage];

    for (const k of keys) {
      if (typeof value === "object" && value !== null) {
        value = value[k];
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
