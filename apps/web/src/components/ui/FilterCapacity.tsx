import React from "react";
import { Group, Text, ActionIcon } from "@mantine/core";
import { IconMinus, IconPlus, IconUsers } from "@tabler/icons-react";

export interface FilterCapacityProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  icon?: React.ComponentType<any>;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Contador de capacidade reutilizável para filtros
 * Implementa o padrão DRY para controles de incremento/decremento
 */
export const FilterCapacity: React.FC<FilterCapacityProps> = ({
  label,
  value,
  onChange,
  min = 1,
  max = 10,
  icon: Icon = IconUsers,
  size = "lg",
  className
}) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className={className}>
      <Text size="sm" fw={500} mb="xs">
        {label}
      </Text>
      <Group gap="sm">
        <ActionIcon
          variant="outline"
          size={size}
          onClick={handleDecrement}
          disabled={value <= min}
        >
          <IconMinus size={16} />
        </ActionIcon>

        <Group gap="xs" px="md">
          <Icon size={16} />
          <Text size="md" fw={500}>
            {value}
          </Text>
        </Group>

        <ActionIcon
          variant="outline"
          size={size}
          onClick={handleIncrement}
          disabled={value >= max}
        >
          <IconPlus size={16} />
        </ActionIcon>
      </Group>
    </div>
  );
};
