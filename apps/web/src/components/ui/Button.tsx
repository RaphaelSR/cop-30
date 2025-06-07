import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps
} from "@mantine/core";

interface ButtonProps extends Omit<MantineButtonProps, "variant" | "size"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  disabled = false,
  className = "",
  fullWidth = false,
  ...rest
}) => {
  const mantineVariant = {
    primary: "filled",
    secondary: "filled",
    outline: "outline",
    ghost: "subtle"
  } as const;

  const mantineSize = {
    sm: "sm",
    md: "md",
    lg: "lg"
  } as const;

  const mantineColor = variant === "secondary" ? "gray" : "green";

  if (to) {
    return (
      <MantineButton
        component={Link}
        to={to}
        variant={mantineVariant[variant]}
        size={mantineSize[size]}
        color={mantineColor}
        fullWidth={fullWidth}
        disabled={disabled}
        className={className}
        onClick={onClick}
        {...rest}
      >
        {children}
      </MantineButton>
    );
  }

  if (href) {
    return (
      <MantineButton
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variant={mantineVariant[variant]}
        size={mantineSize[size]}
        color={mantineColor}
        fullWidth={fullWidth}
        disabled={disabled}
        className={className}
        onClick={onClick}
        {...rest}
      >
        {children}
      </MantineButton>
    );
  }

  return (
    <MantineButton
      variant={mantineVariant[variant]}
      size={mantineSize[size]}
      color={mantineColor}
      fullWidth={fullWidth}
      disabled={disabled}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </MantineButton>
  );
};
