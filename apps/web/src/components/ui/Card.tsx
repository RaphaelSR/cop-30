import React, { ReactNode } from "react";
import {
  Card as MantineCard,
  CardProps as MantineCardProps
} from "@mantine/core";

interface CardProps extends Omit<MantineCardProps, "padding"> {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padding = "md",
  hover = false,
  ...rest
}) => {
  const mantinePadding = {
    sm: "sm",
    md: "md",
    lg: "lg"
  } as const;

  return (
    <MantineCard
      shadow="sm"
      padding={mantinePadding[padding]}
      radius="md"
      withBorder
      className={className}
      style={{
        transition: hover ? "all 0.2s ease, box-shadow 0.2s ease" : undefined,
        cursor: hover ? "pointer" : undefined
      }}
      {...(hover && {
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.boxShadow = "var(--mantine-shadow-lg)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "var(--mantine-shadow-sm)";
        }
      })}
      {...rest}
    >
      {children}
    </MantineCard>
  );
};
