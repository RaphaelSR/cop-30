import React, { ReactNode } from "react";
import { Container } from "../ui";
import { GSSectionHeader } from "ui";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  headerAlign?: "left" | "center" | "right";
  showHeader?: boolean;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  subtitle,
  headerAlign = "center",
  showHeader = true,
  className = "",
  containerSize = "full"
}) => {
  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 ${className}`}
    >
      <Container size={containerSize}>
        {showHeader && title && (
          <GSSectionHeader
            title={title}
            subtitle={subtitle}
            align={headerAlign}
            className="mb-8"
          />
        )}
        {children}
      </Container>
    </div>
  );
};
