import React, { ReactNode } from "react";
import { SimpleGrid, SimpleGridProps } from "@mantine/core";

interface GridProps extends Omit<SimpleGridProps, "cols"> {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "sm" | "md" | "lg" | "xl";
  className?: string;
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 6 | 12;
    md?: 1 | 2 | 3 | 4 | 6 | 12;
    lg?: 1 | 2 | 3 | 4 | 6 | 12;
    xl?: 1 | 2 | 3 | 4 | 6 | 12;
  };
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 1,
  gap = "md",
  className = "",
  responsive,
  ...rest
}) => {
  const mantineSpacing = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl"
  } as const;

  // Mapeamento correto dos breakpoints do Tailwind para Mantine
  const breakpoints = responsive
    ? {
        base: cols,
        sm: responsive.sm || cols, // 640px+
        md: responsive.md || cols, // 768px+
        lg: responsive.lg || cols, // 1024px+
        xl: responsive.xl || cols // 1280px+
      }
    : cols;

  return (
    <SimpleGrid
      cols={breakpoints}
      spacing={mantineSpacing[gap]}
      className={className}
      {...rest}
    >
      {children}
    </SimpleGrid>
  );
};
