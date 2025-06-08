import React from "react";
import {
  Stack,
  Group,
  TextInput,
  RangeSlider,
  Switch,
  Button,
  Text,
  ActionIcon,
  Box,
  Chip,
  Autocomplete,
  Tooltip,
  Badge,
  Drawer
} from "@mantine/core";
import {
  IconSearch,
  IconMapPin,
  IconMinus,
  IconPlus,
  IconUsers,
  IconX,
  IconFilter,
  IconInfoCircle
} from "@tabler/icons-react";
import { useLanguage } from "../../hooks/useLanguage";
import {
  STAY_TYPES,
  NEIGHBORHOODS,
  PRICE_SLIDER_CONFIG
} from "../../constants";
import type { StayFilters } from "../../types/stay";

interface StayFiltersComponentProps {
  filters: StayFilters;
  onFiltersChange: (filters: StayFilters) => void;
  onClear: () => void;
  opened?: boolean;
  onClose?: () => void;
  variant?: "sidebar" | "drawer";
}

export const StayFiltersComponent: React.FC<StayFiltersComponentProps> = ({
  filters,
  onFiltersChange,
  onClear,
  opened = false,
  onClose,
  variant = "drawer"
}) => {
  const { t } = useLanguage();

  const updateFilter = (
    key: keyof StayFilters,
    value: string | number | boolean | null | string[] | [number, number]
  ) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const hasActiveFilters = () => {
    return (
      filters.search !== "" ||
      filters.neighborhood !== null ||
      filters.type.length > 0 ||
      filters.priceRange[0] !== PRICE_SLIDER_CONFIG.defaultValue[0] ||
      filters.priceRange[1] !== PRICE_SLIDER_CONFIG.defaultValue[1] ||
      filters.capacity > 1 ||
      filters.verifiedHost
    );
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.search !== "") count++;
    if (filters.neighborhood !== null) count++;
    if (filters.type.length > 0) count++;
    if (
      filters.priceRange[0] !== PRICE_SLIDER_CONFIG.defaultValue[0] ||
      filters.priceRange[1] !== PRICE_SLIDER_CONFIG.defaultValue[1]
    )
      count++;
    if (filters.capacity > 1) count++;
    if (filters.verifiedHost) count++;
    return count;
  };

  const neighborhoodOptions = NEIGHBORHOODS.map((n) => ({
    value: n.id,
    label: t(`listings.neighborhoods.${n.id}`) || n.name
  }));

  const FiltersContent = () => (
    <Stack gap={variant === "sidebar" ? "lg" : "xl"}>
      {/* Title for Sidebar */}
      {variant === "sidebar" && (
        <Group gap="sm" mb="sm">
          <IconFilter size={20} />
          <Text fw={500} size="lg">
            {t("stay.filters.showFilters")}
          </Text>
          {getActiveFiltersCount() > 0 && (
            <Badge variant="filled" color="blue" size="sm">
              {getActiveFiltersCount()}
            </Badge>
          )}
        </Group>
      )}

      {/* Search Field */}
      <TextInput
        placeholder={t("stay.searchPlaceholder")}
        value={filters.search}
        onChange={(e) => updateFilter("search", e.target.value)}
        leftSection={<IconSearch size={16} />}
        size="md"
        radius="md"
      />

      {/* Price Range Slider */}
      <Box>
        <Group justify="space-between" mb="md">
          <Text size="sm" fw={500}>
            {t("stay.filters.priceRange")}
          </Text>
          <Text size="sm" fw={600} c="blue.6">
            R$ {filters.priceRange[0]} - R$ {filters.priceRange[1]}
          </Text>
        </Group>
        <Box px="xs" pb="md">
          <RangeSlider
            min={PRICE_SLIDER_CONFIG.min}
            max={PRICE_SLIDER_CONFIG.max}
            step={PRICE_SLIDER_CONFIG.step}
            value={filters.priceRange}
            onChange={(value) => updateFilter("priceRange", value)}
            marks={PRICE_SLIDER_CONFIG.marks}
            size="lg"
            radius="xl"
            styles={(theme) => ({
              track: {
                height: 12,
                borderRadius: 6,
                background: `linear-gradient(to right, ${theme.colors.gray[2]}, ${theme.colors.gray[3]})`
              },
              bar: {
                height: 12,
                borderRadius: 6,
                background: `linear-gradient(45deg, ${theme.colors.blue[5]}, ${theme.colors.blue[7]})`
              },
              thumb: {
                width: 24,
                height: 24,
                borderWidth: 3,
                borderColor: theme.white,
                background: theme.colors.blue[6],
                transition: "all 0.2s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  background: theme.colors.blue[7]
                }
              },
              markLabel: {
                fontSize: 11,
                fontWeight: 500,
                color: theme.colors.gray[6],
                marginTop: 8
              }
            })}
          />
        </Box>
      </Box>

      {/* Capacity Control */}
      <Box>
        <Text size="sm" fw={500} mb="xs">
          {t("stay.filters.capacity")}
        </Text>
        <Group gap="sm">
          <ActionIcon
            variant="outline"
            size="lg"
            onClick={() =>
              updateFilter("capacity", Math.max(1, filters.capacity - 1))
            }
            disabled={filters.capacity <= 1}
          >
            <IconMinus size={16} />
          </ActionIcon>

          <Group gap="xs" px="md">
            <IconUsers size={16} />
            <Text size="md" fw={500}>
              {filters.capacity}
            </Text>
          </Group>

          <ActionIcon
            variant="outline"
            size="lg"
            onClick={() =>
              updateFilter("capacity", Math.min(10, filters.capacity + 1))
            }
            disabled={filters.capacity >= 10}
          >
            <IconPlus size={16} />
          </ActionIcon>
        </Group>
      </Box>

      {/* Stay Types */}
      <Box>
        <Text size="sm" fw={500} mb="xs">
          {t("stay.filters.type")}
        </Text>
        <Chip.Group
          multiple
          value={filters.type}
          onChange={(value) => updateFilter("type", value)}
        >
          <Group gap="xs">
            {STAY_TYPES.map((type) => (
              <Chip
                key={type.id}
                value={type.id}
                variant="outline"
                size="md"
                radius="md"
              >
                <Group gap={4} wrap="nowrap">
                  <span style={{ fontSize: "14px" }}>{type.iconName}</span>
                  <Text size="sm">
                    {t(`listings.types.${type.id}`) || type.name}
                  </Text>
                </Group>
              </Chip>
            ))}
          </Group>
        </Chip.Group>
      </Box>

      {/* Neighborhood */}
      <Box>
        <Text size="sm" fw={500} mb="xs">
          {t("stay.filters.neighborhood")}
        </Text>
        <Autocomplete
          placeholder={t("stay.filters.allNeighborhoods")}
          value={filters.neighborhood || ""}
          onChange={(value) => updateFilter("neighborhood", value || null)}
          data={neighborhoodOptions}
          leftSection={<IconMapPin size={16} />}
          clearable
          size="md"
          radius="md"
        />
      </Box>

      {/* Verified Host */}
      <Group justify="space-between">
        <Group gap="xs">
          <Text size="sm" fw={500}>
            {t("stay.filters.verifiedHost")}
          </Text>
          <Tooltip label="Anfitriões verificados passaram por processo de validação">
            <IconInfoCircle size={14} color="var(--mantine-color-gray-6)" />
          </Tooltip>
        </Group>
        <Switch
          checked={filters.verifiedHost}
          onChange={(event) =>
            updateFilter("verifiedHost", event.currentTarget.checked)
          }
          size="md"
        />
      </Group>

      {/* Action Buttons */}
      {variant === "sidebar" ? (
        <Group justify="space-between" mt="xl">
          <Button
            variant="subtle"
            color="gray"
            leftSection={<IconX size={16} />}
            onClick={onClear}
            disabled={!hasActiveFilters()}
            fullWidth
          >
            {t("stay.filters.clear")}
          </Button>
        </Group>
      ) : (
        <Group justify="space-between" mt="xl">
          <Button
            variant="subtle"
            color="gray"
            leftSection={<IconX size={16} />}
            onClick={onClear}
            disabled={!hasActiveFilters()}
          >
            {t("stay.filters.clear")}
          </Button>

          <Button variant="filled" onClick={onClose} style={{ minWidth: 120 }}>
            {t("stay.filters.apply")}
          </Button>
        </Group>
      )}
    </Stack>
  );

  // Mobile or Drawer: Use Drawer
  if (variant === "drawer") {
    return (
      <Drawer
        opened={opened}
        onClose={onClose || (() => {})}
        title={
          <Group gap="sm">
            <IconFilter size={20} />
            <Text fw={500}>{t("stay.filters.showFilters")}</Text>
            {getActiveFiltersCount() > 0 && (
              <Badge variant="filled" color="blue" size="sm">
                {getActiveFiltersCount()}
              </Badge>
            )}
          </Group>
        }
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
        <FiltersContent />
      </Drawer>
    );
  }

  // Desktop Sidebar: Use direct content
  return <FiltersContent />;
};

export { StayFiltersComponent as StayFilters };
