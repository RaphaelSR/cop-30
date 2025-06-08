import React, { ReactNode } from "react";
import { Group, Text, Chip } from "@mantine/core";

export interface FilterChipOption {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface FilterChipGroupProps {
  label: string;
  options: FilterChipOption[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline" | "light";
  className?: string;
}

/**
 * Grupo de chips selecionáveis para filtros
 * Implementa o padrão DRY para seleção múltipla ou única em filtros
 */
export const FilterChipGroup: React.FC<FilterChipGroupProps> = ({
  label,
  options,
  value,
  onChange,
  multiple = false,
  size = "md",
  variant = "outline",
  className
}) => {
  return (
    <div className={className}>
      <Text size="sm" fw={500} mb="xs">
        {label}
      </Text>
      <Chip.Group multiple={multiple} value={value} onChange={onChange}>
        <Group gap="xs">
          {options.map((option) => (
            <Chip
              key={option.id}
              value={option.id}
              variant={variant}
              size={size}
              radius="md"
            >
              {option.icon ? (
                <Group gap={4} wrap="nowrap">
                  {option.icon}
                  <Text size="sm">{option.label}</Text>
                </Group>
              ) : (
                option.label
              )}
            </Chip>
          ))}
        </Group>
      </Chip.Group>
    </div>
  );
};
