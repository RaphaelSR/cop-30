import React, { useState } from "react";
import { SimpleGrid, Title, Text, Center, Card, Box } from "@mantine/core";
import GuideFilters from "../components/features/GuideFilters";
import { GuideCard } from "../components/features/GuideCard";
import { GuideDetailModal } from "../components/features/GuideDetailModal";
import { useGuides } from "../hooks/useGuides";
import { useLanguage } from "../hooks/useLanguage";
import { TourGuide, GuideFilters as GuideFiltersType } from "../types/guides";
import { PageLayout } from "../components/layout/PageLayout";

const GuidesPage: React.FC = () => {
  const { t } = useLanguage();
  const { guides } = useGuides();
  const [selectedGuide, setSelectedGuide] = useState<TourGuide | null>(null);
  const [filters, setFilters] = useState<GuideFiltersType>({
    search: "",
    category: null,
    free: false,
    languages: []
  });

  const filteredGuides = guides.filter((guide) => {
    // Filtro por busca
    if (
      filters.search &&
      !guide.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      !guide.description.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // Filtro por categoria
    if (filters.category && guide.category !== filters.category) {
      return false;
    }

    // Filtro por gratuito
    if (filters.free && !guide.free) {
      return false;
    }

    // Filtro por idiomas
    if (
      filters.languages.length > 0 &&
      !filters.languages.some((lang) => guide.languages.includes(lang))
    ) {
      return false;
    }

    return true;
  });

  const handleViewDetails = (guide: TourGuide) => {
    setSelectedGuide(guide);
  };

  const handleContact = (guide: TourGuide) => {
    // Implementar lógica de contato
    console.log("Contacting guide:", guide.name);
  };

  const handleCloseModal = () => {
    setSelectedGuide(null);
  };

  return (
    <PageLayout title={t("events.title")} subtitle={t("events.subtitle")}>
      <Box mb="xl">
        <Title order={1} ta="center" mb="md">
          {t("guides.title")}
        </Title>
        <Text ta="center" c="dimmed" size="lg">
          {t("guides.subtitle")}
        </Text>
      </Box>

      <Box mb="xl">
        <GuideFilters
          filters={filters}
          onFiltersChange={setFilters}
          totalResults={filteredGuides.length}
        />
      </Box>

      {filteredGuides.length === 0 ? (
        <Center style={{ minHeight: "30vh" }}>
          <Card shadow="sm" padding="xl" radius="md" withBorder>
            <Text ta="center" size="lg" fw={500} mb="md">
              {t("common.noResults")}
            </Text>
            <Text ta="center" c="dimmed">
              {t("guides.constructionMessage")}
            </Text>
          </Card>
        </Center>
      ) : (
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing="lg"
          verticalSpacing="lg"
        >
          {filteredGuides.map((guide) => (
            <GuideCard
              key={guide.id}
              guide={guide}
              onViewDetails={handleViewDetails}
              onContact={handleContact}
            />
          ))}
        </SimpleGrid>
      )}

      {selectedGuide && (
        <GuideDetailModal
          guide={selectedGuide}
          isOpen={!!selectedGuide}
          onClose={handleCloseModal}
        />
      )}
    </PageLayout>
  );
};

export default GuidesPage;
