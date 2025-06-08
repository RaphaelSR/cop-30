import React, { ReactNode } from "react";
import { Box, Text } from "@mantine/core";

export interface FilterGroupProps {
  label: string;
  children: ReactNode;
  className?: string;
  spacing?: "xs" | "sm" | "md" | "lg";
}

/**
 * Wrapper para grupos de filtros com label
 * Implementa o padrão DRY para estrutura de grupos de filtros
 */
export const FilterGroup: React.FC<FilterGroupProps> = ({
  label,
  children,
  className,
  spacing = "xs"
}) => {
  return (
    <Box className={className}>
      <Text size="sm" fw={500} mb={spacing}>
        {label}
      </Text>
      {children}
    </Box>
  );
};
