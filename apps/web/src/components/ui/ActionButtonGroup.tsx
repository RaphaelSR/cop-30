import React from "react";
import { Group, Button, ButtonProps } from "@mantine/core";

export interface ActionButtonGroupProps {
  actions: Array<{
    label: string;
    onClick: (e?: React.MouseEvent) => void;
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
    icon?: React.ReactNode;
    disabled?: boolean;
    flex?: number;
    color?: string;
  }>;
  gap?: "xs" | "sm" | "md" | "lg";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  fullWidth?: boolean;
}

/**
 * Component reutilizável para grupos de botões de ação
 * Aplica princípio DRY - evita repetição de Groups com Buttons
 * Aplica princípio Single Responsibility - apenas renderiza grupos de ações
 */
export const ActionButtonGroup: React.FC<ActionButtonGroupProps> = ({
  actions,
  gap = "xs",
  justify = "space-between",
  fullWidth = false
}) => {
  return (
    <Group
      gap={gap}
      justify={justify}
      style={fullWidth ? { width: "100%" } : undefined}
    >
      {actions.map((action, index) => (
        <Button
          key={index}
          variant={action.variant || "filled"}
          size={action.size || "sm"}
          leftSection={action.icon}
          onClick={action.onClick}
          disabled={action.disabled}
          color={action.color}
          style={{ flex: action.flex }}
        >
          {action.label}
        </Button>
      ))}
    </Group>
  );
};
