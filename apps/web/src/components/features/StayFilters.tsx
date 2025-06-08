import React from "react";
import { Stack, Group, Text, Autocomplete, Tooltip } from "@mantine/core";
import { IconMapPin, IconUsers, IconInfoCircle } from "@tabler/icons-react";
import { useLanguage } from "../../hooks/useLanguage";
import {
  STAY_TYPES,
  NEIGHBORHOODS,
  PRICE_SLIDER_CONFIG
} from "../../constants";
import type { StayFilters } from "../../types/stay";
import {
  BaseFilterContainer,
  FilterSearch,
  FilterGroup,
  FilterRange,
  FilterCapacity,
  FilterChipGroup,
  FilterToggle,
  FilterActions
} from "../ui";

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

  const stayTypeOptions = STAY_TYPES.map((type) => ({
    id: type.id,
    label: t(`listings.types.${type.id}`) || type.name,
    icon: <span style={{ fontSize: "14px" }}>{type.iconName}</span>
  }));

  const title = t("stay.filters.showFilters") || "Filtros";

  return (
    <BaseFilterContainer
      title={title}
      activeFiltersCount={getActiveFiltersCount()}
      variant={variant}
      opened={opened}
      onClose={onClose}
    >
      <Stack gap={variant === "sidebar" ? "lg" : "xl"}>
        <FilterSearch
          placeholder={t("stay.searchPlaceholder") || "Buscar acomodações..."}
          value={filters.search}
          onChange={(value) => updateFilter("search", value)}
        />

        <FilterGroup label={t("stay.filters.priceRange") || "Faixa de preço"}>
          <FilterRange
            label=""
            min={PRICE_SLIDER_CONFIG.min}
            max={PRICE_SLIDER_CONFIG.max}
            step={PRICE_SLIDER_CONFIG.step}
            value={filters.priceRange}
            onChange={(value) => updateFilter("priceRange", value)}
            marks={PRICE_SLIDER_CONFIG.marks}
            formatValue={(value) => `R$ ${value}`}
          />
        </FilterGroup>

        <FilterGroup label={t("stay.filters.capacity") || "Capacidade"}>
          <FilterCapacity
            label=""
            value={filters.capacity}
            onChange={(value: number) => updateFilter("capacity", value)}
            min={1}
            max={10}
            icon={IconUsers}
          />
        </FilterGroup>

        <FilterGroup label={t("stay.filters.type") || "Tipo de acomodação"}>
          <FilterChipGroup
            label=""
            options={stayTypeOptions}
            value={filters.type}
            onChange={(value: string | string[]) => updateFilter("type", value)}
            multiple={true}
          />
        </FilterGroup>

        <FilterGroup label={t("stay.filters.neighborhood") || "Bairro"}>
          <Autocomplete
            placeholder={
              t("stay.filters.allNeighborhoods") || "Todos os bairros"
            }
            value={filters.neighborhood || ""}
            onChange={(value) => updateFilter("neighborhood", value || null)}
            data={neighborhoodOptions}
            leftSection={<IconMapPin size={16} />}
            clearable
            size="md"
            radius="md"
          />
        </FilterGroup>

        <Group justify="space-between">
          <Group gap="xs">
            <Text size="sm" fw={500}>
              {t("stay.filters.verifiedHost") || "Anfitrião verificado"}
            </Text>
            <Tooltip label="Anfitriões verificados passaram por processo de validação">
              <IconInfoCircle size={14} color="var(--mantine-color-gray-6)" />
            </Tooltip>
          </Group>
          <FilterToggle
            label=""
            checked={filters.verifiedHost}
            onChange={(checked) => updateFilter("verifiedHost", checked)}
          />
        </Group>

        <FilterActions
          onClear={onClear}
          onApply={onClose}
          clearLabel={t("stay.filters.clear") || "Limpar"}
          applyLabel={t("stay.filters.apply") || "Aplicar"}
          hasActiveFilters={hasActiveFilters()}
          variant={variant}
        />
      </Stack>
    </BaseFilterContainer>
  );
};

export { StayFiltersComponent as StayFilters };
