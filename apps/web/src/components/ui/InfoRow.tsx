import React from "react";
import { Group, Text, GroupProps } from "@mantine/core";

export interface InfoRowProps extends Omit<GroupProps, "children"> {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  text: string;
  iconSize?: number;
  iconColor?: string;
  textSize?: "xs" | "sm" | "md" | "lg";
  textColor?: string;
}

/**
 * Component reutilizável para linhas de informação com ícone + texto
 * Aplica princípio DRY - evita repetição de Group + Icon + Text
 * Aplica princípio Single Responsibility - apenas renderiza informações com ícone
 */
export const InfoRow: React.FC<InfoRowProps> = ({
  icon: Icon,
  text,
  iconSize = 16,
  iconColor = "var(--mantine-color-dimmed)",
  textSize = "sm",
  textColor = "dimmed",
  gap = "xs",
  ...rest
}) => {
  return (
    <Group gap={gap} {...rest}>
      <Icon size={iconSize} style={{ color: iconColor }} />
      <Text size={textSize} c={textColor}>
        {text}
      </Text>
    </Group>
  );
};
