import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../hooks";
import LanguageThemeSelector from "./LanguageThemeSelector";
import { Container } from "./ui";

const Header = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/stay", label: t("nav.stay") },
    { path: "/guides", label: t("nav.guides") },
    { path: "/events", label: t("nav.events") },
    { path: "/explore", label: t("nav.explore") }
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-cop-green-600 dark:bg-cop-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">30</span>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              COP30{" "}
              <span className="text-cop-green-600 dark:text-cop-green-400">
                Belém Hub
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "text-cop-green-600 dark:text-cop-green-400 bg-cop-green-50 dark:bg-cop-green-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-cop-green-600 dark:hover:text-cop-green-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Language and Theme Selector */}
            <LanguageThemeSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cop-green-500 transition-colors"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Abrir menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-cop-green-600 dark:text-cop-green-400 bg-cop-green-50 dark:bg-cop-green-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-cop-green-600 dark:hover:text-cop-green-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
