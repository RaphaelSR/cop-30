import React, { ReactNode } from "react";
import { Stack, Group, Text, Badge, Card, Drawer } from "@mantine/core";
import { IconFilter } from "@tabler/icons-react";

export interface BaseFilterContainerProps {
  children: ReactNode;
  title: string;
  activeFiltersCount?: number;
  variant?: "sidebar" | "drawer";
  opened?: boolean;
  onClose?: () => void;
  className?: string;
}

/**
 * Container base para componentes de filtros
 * Implementa o padrão DRY para estrutura comum de filtros
 */
export const BaseFilterContainer: React.FC<BaseFilterContainerProps> = ({
  children,
  title,
  activeFiltersCount = 0,
  variant = "sidebar",
  opened = false,
  onClose,
  className
}) => {
  const Header = () => (
    <Group gap="sm" mb={variant === "sidebar" ? "sm" : "md"}>
      <IconFilter size={20} />
      <Text fw={500} size={variant === "sidebar" ? "lg" : "xl"}>
        {title}
      </Text>
      {activeFiltersCount > 0 && (
        <Badge variant="filled" color="blue" size="sm">
          {activeFiltersCount}
        </Badge>
      )}
    </Group>
  );

  const Content = () => (
    <Stack gap={variant === "sidebar" ? "lg" : "xl"}>
      {variant === "sidebar" && <Header />}
      {children}
    </Stack>
  );

  if (variant === "drawer") {
    return (
      <Drawer
        opened={opened}
        onClose={onClose || (() => {})}
        title={<Header />}
        padding="lg"
        size="sm"
        position="bottom"
        styles={{
          content: {
            borderTopLeftRadius: "var(--mantine-radius-lg)",
            borderTopRightRadius: "var(--mantine-radius-lg)"
          }
        }}
      >
        <Content />
      </Drawer>
    );
  }

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder className={className}>
      <Content />
    </Card>
  );
};
