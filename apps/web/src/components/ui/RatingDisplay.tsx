import React from "react";
import { Group, Rating, Text, GroupProps } from "@mantine/core";

export interface RatingDisplayProps extends Omit<GroupProps, "children"> {
  rating: number;
  showValue?: boolean;
  maxRating?: number;
  size?: "xs" | "sm" | "md" | "lg";
  precision?: number;
  readOnly?: boolean;
}

/**
 * Component reutilizável para exibição de ratings
 * Aplica princípio DRY - evita repetição de Rating + Text
 * Aplica princípio Single Responsibility - apenas exibe ratings
 */
export const RatingDisplay: React.FC<RatingDisplayProps> = ({
  rating,
  showValue = true,
  maxRating = 5,
  size = "sm",
  precision = 1,
  readOnly = true,
  gap = "xs",
  ...rest
}) => {
  const textSize = {
    xs: "xs",
    sm: "xs",
    md: "sm",
    lg: "md"
  } as const;

  return (
    <Group gap={gap} {...rest}>
      <Rating
        value={rating}
        readOnly={readOnly}
        size={size}
        count={maxRating}
      />
      {showValue && (
        <Text size={textSize[size]} c="dimmed">
          ({rating.toFixed(precision)})
        </Text>
      )}
    </Group>
  );
};
