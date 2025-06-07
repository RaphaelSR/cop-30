import { useState } from "react";
import {
  Card,
  TextInput,
  Button,
  Group,
  Stack,
  Chip,
  Collapse,
  Box,
  Text
} from "@mantine/core";
import { IconSearch, IconFilter, IconX } from "@tabler/icons-react";
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
    filters.category || filters.free || filters.languages.length > 0;

  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, search: value });
  };

  const handleCategoryChange = (value: string | string[]) => {
    const category = Array.isArray(value) ? value[0] : value;
    onFiltersChange({ ...filters, category: category || null });
  };

  const handleFreeToggle = () => {
    onFiltersChange({ ...filters, free: !filters.free });
  };

  const handleLanguageToggle = (language: string) => {
    const currentLanguages = filters.languages;
    const newLanguages = currentLanguages.includes(language)
      ? currentLanguages.filter((l) => l !== language)
      : [...currentLanguages, language];

    onFiltersChange({ ...filters, languages: newLanguages });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      category: null,
      free: false,
      languages: []
    });
  };

  const availableLanguages = ["Português", "English", "Español", "Français"];

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Stack gap="md">
        {/* Busca */}
        <TextInput
          placeholder={t("guides.searchPlaceholder")}
          value={filters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
          leftSection={<IconSearch size={16} />}
        />

        {/* Resultados e Filtro Gratuito */}
        <Group justify="space-between">
          <Text size="sm" c="dimmed">
            {t("guides.resultsCount").replace(
              "{{count}}",
              totalResults.toString()
            )}
          </Text>

          <Group gap="sm">
            <Button
              variant={filters.free ? "filled" : "outline"}
              size="sm"
              onClick={handleFreeToggle}
            >
              {t("guides.filters.onlyFree")}
            </Button>

            <Button
              variant="light"
              size="sm"
              leftSection={<IconFilter size={16} />}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded
                ? t("guides.filters.hideFilters")
                : t("guides.filters.showFilters")}
            </Button>
          </Group>
        </Group>

        {/* Filtros Expandidos */}
        <Collapse in={isExpanded}>
          <Stack gap="md">
            {/* Categorias */}
            <Box>
              <Text size="sm" fw={600} mb="xs">
                {t("guides.filters.categories")}
              </Text>
              <Chip.Group
                value={filters.category || ""}
                onChange={handleCategoryChange}
              >
                <Group gap="xs">
                  {GUIDE_CATEGORIES.map((category) => (
                    <Chip key={category.id} value={category.id} size="sm">
                      {category.label}
                    </Chip>
                  ))}
                </Group>
              </Chip.Group>
            </Box>

            {/* Idiomas */}
            <Box>
              <Text size="sm" fw={600} mb="xs">
                {t("guides.filters.languages")}
              </Text>
              <Group gap="xs">
                {availableLanguages.map((language) => (
                  <Chip
                    key={language}
                    checked={filters.languages.includes(language)}
                    onChange={() => handleLanguageToggle(language)}
                    size="sm"
                  >
                    {language}
                  </Chip>
                ))}
              </Group>
            </Box>
          </Stack>
        </Collapse>

        {/* Limpar Filtros */}
        {hasActiveFilters && (
          <Group justify="center">
            <Button
              variant="subtle"
              size="sm"
              leftSection={<IconX size={16} />}
              onClick={clearFilters}
            >
              {t("guides.filters.clear")}
            </Button>
          </Group>
        )}
      </Stack>
    </Card>
  );
}

// Default export
export default GuideFilters;

// Named export alias for compatibility
export const GuideFiltersComponent = GuideFilters;
