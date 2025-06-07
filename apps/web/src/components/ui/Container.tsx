import React, { ReactNode } from "react";
import {
  Container as MantineContainer,
  ContainerProps as MantineContainerProps
} from "@mantine/core";

interface ContainerProps extends Omit<MantineContainerProps, "size"> {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  padding?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = "lg",
  className = "",
  padding = true,
  ...rest
}) => {
  const mantineSize = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    full: "responsive"
  } as const;

  return (
    <MantineContainer
      size={mantineSize[size]}
      className={className}
      px={padding ? "md" : 0}
      {...rest}
    >
      {children}
    </MantineContainer>
  );
};
