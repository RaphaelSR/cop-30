import React from "react";
import { Group, Button } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

export interface FilterActionsProps {
  onClear: () => void;
  onApply?: () => void;
  clearLabel: string;
  applyLabel?: string;
  variant?: "sidebar" | "drawer";
  hasActiveFilters: boolean;
  className?: string;
}

/**
 * Botões de ação para filtros (limpar/aplicar)
 * Implementa o padrão DRY para ações comuns em filtros
 */
export const FilterActions: React.FC<FilterActionsProps> = ({
  onClear,
  onApply,
  clearLabel,
  applyLabel,
  variant = "sidebar",
  hasActiveFilters,
  className
}) => {
  if (variant === "sidebar") {
    return (
      <Group justify="space-between" mt="xl" className={className}>
        <Button
          variant="subtle"
          color="gray"
          leftSection={<IconX size={16} />}
          onClick={onClear}
          disabled={!hasActiveFilters}
          fullWidth
        >
          {clearLabel}
        </Button>
      </Group>
    );
  }

  return (
    <Group justify="space-between" mt="xl" className={className}>
      <Button
        variant="subtle"
        color="gray"
        leftSection={<IconX size={16} />}
        onClick={onClear}
        disabled={!hasActiveFilters}
      >
        {clearLabel}
      </Button>

      {onApply && applyLabel && (
        <Button variant="filled" onClick={onApply} style={{ minWidth: 120 }}>
          {applyLabel}
        </Button>
      )}
    </Group>
  );
};
