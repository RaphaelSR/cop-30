import React, { ReactNode } from "react";

interface GridProps {
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
  responsive
}) => {
  const colsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    6: "grid-cols-6",
    12: "grid-cols-12"
  };

  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12"
  };

  let responsiveClasses = "";
  if (responsive) {
    const { sm, md, lg, xl } = responsive;
    if (sm) responsiveClasses += ` sm:${colsClasses[sm]}`;
    if (md) responsiveClasses += ` md:${colsClasses[md]}`;
    if (lg) responsiveClasses += ` lg:${colsClasses[lg]}`;
    if (xl) responsiveClasses += ` xl:${colsClasses[xl]}`;
  }

  return (
    <div
      className={`
        grid 
        ${colsClasses[cols]} 
        ${gapClasses[gap]} 
        ${responsiveClasses} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
