import { useState } from "react";
import {
  FilterSearch,
  FilterGroup,
  FilterChipGroup,
  FilterToggle,
  FilterActions
} from "../ui";
import { Group, Text, Collapse, Card, Stack, Button } from "@mantine/core";
import { IconFilter } from "@tabler/icons-react";
import { GuideFilters as GuideFiltersType } from "../../types/guides";
import { useLanguage } from "../../hooks/useLanguage";

// Temporary inline categories until import issue is resolved
const GUIDE_CATEGORIES = [
  { id: "cultura", label: "Cultura" },
  { id: "natureza", label: "Natureza" },
  { id: "gastronomia", label: "Gastronomia" },
  { id: "historia", label: "História" }
];

interface GuideFiltersProps {
  filters: GuideFiltersType;
  onFiltersChange: (filters: GuideFiltersType) => void;
  totalResults: number;
}

export function GuideFilters({
  filters,
  onFiltersChange,
  totalResults
}: GuideFiltersProps) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const hasActiveFilters =
    Boolean(filters.category) ||
    Boolean(filters.free) ||
    filters.languages.length > 0;

  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, search: value });
  };

  const handleCategoryChange = (value: string | string[]) => {
    const category = Array.isArray(value) ? value[0] : value;
    onFiltersChange({ ...filters, category: category || null });
  };

  const handleLanguageChange = (value: string | string[]) => {
    const languages = Array.isArray(value) ? value : [value];
    onFiltersChange({ ...filters, languages });
  };

  const handleFreeToggle = (checked: boolean) => {
    onFiltersChange({ ...filters, free: checked || undefined });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      category: null,
      free: false,
      languages: []
    });
  };

  const categoryOptions = GUIDE_CATEGORIES.map((cat) => ({
    id: cat.id,
    label: cat.label
  }));

  const languageOptions = ["Português", "English", "Español", "Français"].map(
    (lang) => ({
      id: lang,
      label: lang
    })
  );

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Stack gap="md">
        <FilterSearch
          placeholder={t("guides.searchPlaceholder") || "Buscar guias..."}
          value={filters.search || ""}
          onChange={handleSearchChange}
        />

        <Group justify="space-between">
          <Text size="sm" c="dimmed">
            {t("guides.resultsCount")?.replace(
              "{{count}}",
              totalResults.toString()
            ) || `${totalResults} resultados`}
          </Text>

          <Group gap="sm">
            <FilterToggle
              label={t("guides.filters.onlyFree") || "Apenas gratuitos"}
              checked={Boolean(filters.free)}
              onChange={handleFreeToggle}
            />

            <Button
              variant="light"
              size="sm"
              leftSection={<IconFilter size={16} />}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded
                ? t("guides.filters.hideFilters") || "Ocultar filtros"
                : t("guides.filters.showFilters") || "Mostrar filtros"}
            </Button>
          </Group>
        </Group>

        <Collapse in={isExpanded}>
          <Stack gap="md">
            <FilterGroup label={t("guides.filters.categories") || "Categorias"}>
              <FilterChipGroup
                label=""
                options={categoryOptions}
                value={filters.category ? [filters.category] : []}
                onChange={handleCategoryChange}
                multiple={false}
              />
            </FilterGroup>

            <FilterGroup label={t("guides.filters.languages") || "Idiomas"}>
              <FilterChipGroup
                label=""
                options={languageOptions}
                value={filters.languages}
                onChange={handleLanguageChange}
                multiple={true}
              />
            </FilterGroup>

            {hasActiveFilters && (
              <FilterActions
                onClear={clearFilters}
                clearLabel={t("guides.filters.clear") || "Limpar"}
                hasActiveFilters={hasActiveFilters}
                variant="sidebar"
              />
            )}
          </Stack>
        </Collapse>
      </Stack>
    </Card>
  );
}

// Default export
export default GuideFilters;

// Named export alias for compatibility
export const GuideFiltersComponent = GuideFilters;
