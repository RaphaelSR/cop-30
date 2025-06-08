import React from "react";
import { Badge, BadgeProps, Tooltip } from "@mantine/core";
import { IconCheck, IconGift, IconStar } from "@tabler/icons-react";

export interface StatusBadgeProps
  extends Omit<BadgeProps, "variant" | "color"> {
  type: "verified" | "free" | "featured" | "new" | "popular";
  label: string;
  tooltip?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

/**
 * Component reutilizável para badges de status
 * Aplica princípio DRY - evita repetição de código de badges
 * Aplica princípio Single Responsibility - apenas renderiza badges de status
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  type,
  label,
  tooltip,
  size = "xs",
  ...rest
}) => {
  const badgeConfig = {
    verified: {
      color: "blue",
      variant: "filled" as const,
      icon: <IconCheck size={size === "xs" ? 10 : size === "sm" ? 12 : 14} />
    },
    free: {
      color: "green",
      variant: "filled" as const,
      icon: <IconGift size={size === "xs" ? 10 : size === "sm" ? 12 : 14} />
    },
    featured: {
      color: "orange",
      variant: "filled" as const,
      icon: <IconStar size={size === "xs" ? 10 : size === "sm" ? 12 : 14} />
    },
    new: {
      color: "blue",
      variant: "light" as const,
      icon: null
    },
    popular: {
      color: "red",
      variant: "light" as const,
      icon: null
    }
  };

  const config = badgeConfig[type];

  const badge = (
    <Badge
      variant={config.variant}
      color={config.color}
      size={size}
      leftSection={config.icon}
      {...rest}
    >
      {label}
    </Badge>
  );

  if (tooltip) {
    return <Tooltip label={tooltip}>{badge}</Tooltip>;
  }

  return badge;
};
