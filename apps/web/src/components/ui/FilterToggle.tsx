import React from "react";
import { Group, Text, Switch, Tooltip } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

export interface FilterToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  tooltip?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

/**
 * Switch/Toggle reutilizável para filtros
 * Implementa o padrão DRY para controles de toggle em filtros
 */
export const FilterToggle: React.FC<FilterToggleProps> = ({
  label,
  checked,
  onChange,
  tooltip,
  size = "md",
  className,
  disabled = false
}) => {
  return (
    <Group justify="space-between" className={className}>
      <Group gap="xs">
        <Text size="sm" fw={500}>
          {label}
        </Text>
        {tooltip && (
          <Tooltip label={tooltip}>
            <IconInfoCircle size={14} color="var(--mantine-color-gray-6)" />
          </Tooltip>
        )}
      </Group>
      <Switch
        checked={checked}
        onChange={(event) => onChange(event.currentTarget.checked)}
        size={size}
        disabled={disabled}
      />
    </Group>
  );
};
