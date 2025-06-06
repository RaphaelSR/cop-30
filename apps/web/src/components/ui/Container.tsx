import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  padding?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = "lg",
  className = "",
  padding = true
}) => {
  const sizeClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-7xl",
    xl: "max-w-screen-xl",
    full: "max-w-full"
  };

  const paddingClasses = padding ? "px-4 sm:px-6 lg:px-8" : "";

  return (
    <div
      className={`
        ${sizeClasses[size]} 
        mx-auto 
        ${paddingClasses} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
