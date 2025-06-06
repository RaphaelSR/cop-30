import React from "react";
import { cn, colors } from "../tokens";

export interface GSSectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const GSSectionHeader: React.FC<GSSectionHeaderProps> = ({
  title,
  subtitle,
  align = "left",
  className
}) => {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right"
  };

  return (
    <div
      className={cn(
        "flex flex-col space-y-2",
        alignmentClasses[align],
        className
      )}
    >
      <h2 className={cn("text-2xl font-bold", `text-${colors.text}`)}>
        {title}
      </h2>

      {subtitle && (
        <p className={cn("text-base max-w-80", `text-${colors.muted}`)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
