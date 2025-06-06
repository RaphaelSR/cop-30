import { useState } from "react";
import { useLanguage, useTheme } from "../hooks";

const LanguageThemeSelector = () => {
  const { currentLanguage, changeLanguage, languages, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(
    (lang: { code: string }) => lang.code === currentLanguage
  );

  return (
    <div className="flex items-center space-x-2">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        title={t("theme.toggle")}
      >
        {theme === "light" ? (
          <svg
            className="w-5 h-5 text-gray-700 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-gray-700 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </button>

      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          title={t("language.change")}
        >
          <span className="text-lg">{currentLang?.flag}</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
            {currentLang?.code.toUpperCase()}
          </span>
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20">
              <div className="py-1">
                {languages.map(
                  (language: {
                    code: "pt" | "en";
                    name: string;
                    flag: string;
                    nativeName: string;
                  }) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        changeLanguage(language.code);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                        currentLanguage === language.code
                          ? "bg-cop-green-50 dark:bg-cop-green-900 text-cop-green-600 dark:text-cop-green-300"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <div className="flex flex-col items-start">
                        <span className="font-medium">
                          {language.nativeName}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {language.name}
                        </span>
                      </div>
                      {currentLanguage === language.code && (
                        <svg
                          className="w-4 h-4 ml-auto text-cop-green-600 dark:text-cop-green-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LanguageThemeSelector;
