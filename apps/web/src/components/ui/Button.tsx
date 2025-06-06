import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  disabled = false,
  className = "",
  fullWidth = false
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cop-green-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-cop-green-600 hover:bg-cop-green-700 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-gray-600 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-cop-green-600 text-cop-green-600 hover:bg-cop-green-600 hover:text-white dark:border-cop-green-400 dark:text-cop-green-400 dark:hover:bg-cop-green-400 dark:hover:text-gray-900",
    ghost:
      "text-cop-green-600 hover:bg-cop-green-50 dark:text-cop-green-400 dark:hover:bg-gray-700"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const widthClasses = fullWidth ? "w-full" : "";

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={allClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={allClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={allClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
