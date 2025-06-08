import React from "react";
import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export interface FilterSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

/**
 * Input de busca reutilizável para filtros
 * Implementa o padrão DRY para campos de busca em filtros
 */
export const FilterSearch: React.FC<FilterSearchProps> = ({
  value,
  onChange,
  placeholder,
  size = "md",
  radius = "md",
  className
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      leftSection={<IconSearch size={16} />}
      size={size}
      radius={radius}
      className={className}
    />
  );
};
