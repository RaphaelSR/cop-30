import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padding = "md",
  hover = false
}) => {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };

  const hoverClasses = hover
    ? "hover:shadow-lg hover:scale-105 transition-all duration-200"
    : "";

  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl shadow-md 
        border border-gray-200 dark:border-gray-700
        ${paddingClasses[padding]} 
        ${hoverClasses} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
