import React from "react";
import { cn, colors, borderRadius } from "../tokens";

export interface GSTagProps {
  label: string;
  variant?: "primary" | "success" | "warning" | "info" | "gray";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantStyles = {
  primary: `bg-${colors.primary} text-white`,
  success: `bg-${colors.success} text-white`,
  warning: `bg-${colors.warning} text-gray-800`,
  info: `bg-${colors.info} text-white`,
  gray: "bg-gray-200 text-gray-800"
};

const sizeStyles = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base"
};

export const GSTag: React.FC<GSTagProps> = ({
  label,
  variant = "gray",
  size = "md",
  className
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium",
        borderRadius.full,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {label}
    </span>
  );
};
