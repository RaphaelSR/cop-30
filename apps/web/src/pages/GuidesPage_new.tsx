import React, { useState } from "react";
import { SimpleGrid, Title, Text, Center, Card, Box } from "@mantine/core";
import GuideFilters from "@/components/features/GuideFilters";
import { GuideCard } from "@/components/features/GuideCard";
import { GuideDetailModal } from "@/components/features/GuideDetailModal";
import { useGuides } from "@/hooks/useGuides";
import { useLanguage } from "@/hooks/useLanguage";
import { TourGuide, GuideFilters as GuideFiltersType } from "@/types/guides";
import { PageLayout } from "@/components/layout/PageLayout";

const GuidesPage: React.FC = () => {
  const { t } = useLanguage();
  const { guides, filters, updateFilters, resultsCount } = useGuides();
  const [selectedGuide, setSelectedGuide] = useState<TourGuide | null>(null);

  const handleGuideViewDetails = (guide: TourGuide) => {
    setSelectedGuide(guide);
  };

  const handleGuideContact = (guide: TourGuide) => {
    // Implementar lógica de contato (WhatsApp, email, etc.)
    console.log("Contatar guia:", guide);
  };

  const handleCloseModal = () => {
    setSelectedGuide(null);
  };

  const handleFiltersChange = (newFilters: GuideFiltersType) => {
    updateFilters(newFilters);
  };

  return (
    <PageLayout>
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
          onFiltersChange={handleFiltersChange}
          totalResults={resultsCount}
        />
      </Box>

      {guides.length === 0 ? (
        <Center>
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
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          {guides.map((guide) => (
            <GuideCard
              key={guide.id}
              guide={guide}
              onViewDetails={handleGuideViewDetails}
              onContact={handleGuideContact}
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
