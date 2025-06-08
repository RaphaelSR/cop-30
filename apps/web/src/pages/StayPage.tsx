import React, { useState } from "react";
import {
  Container,
  Title,
  SimpleGrid,
  Stack,
  Group,
  Button,
  Badge,
  Box,
  Flex,
  Paper,
  SegmentedControl,
  Pagination,
  Text
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconHome, IconFilter, IconList, IconMap } from "@tabler/icons-react";
import { useLanguage } from "@/hooks";
import { StayFilters } from "@/components/features/StayFilters";
import { StayCard } from "@/components/features/StayCard";
import { StayDetailModal } from "@/components/features/StayDetailModal";
import { StayMap } from "@/components/features/StayMap";
import { useStay } from "@/hooks/useStay";
import { EmptyState } from "@/components/common/EmptyState";
import { PageLayout } from "@/components/layout/PageLayout";
import { PRICE_SLIDER_CONFIG } from "@/constants";
import type { Listing, StayFilters as StayFiltersType } from "@/types/stay";

type ViewMode = "list" | "map";

export const StayPage: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [selectedStay, setSelectedStay] = useState<Listing | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    filteredListings,
    totalListings,
    totalPages,
    filters,
    updateFilters,
    clearFilters
  } = useStay({
    currentPage,
    itemsPerPage: 6
  });

  const handleFilterChange = (newFilters: StayFiltersType) => {
    updateFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    clearFilters();
    setCurrentPage(1);
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

  return (
    <PageLayout title={t("stay.title")} subtitle={t("stay.subtitle")}>
      <Container
        size="xl"
        py="xl"
        style={{ maxWidth: isMobile ? "100%" : "100%" }}
      >
        <Flex gap={isMobile ? "md" : "xl"} align="flex-start">
          {!isMobile && (
            <Box
              style={{
                minWidth: isTablet ? 280 : 320,
                width: isTablet ? 280 : 320,
                flexShrink: 0
              }}
            >
              <Paper
                withBorder
                p={isTablet ? "md" : "lg"}
                radius="md"
                style={{
                  position: "sticky",
                  top: 20,
                  height: "fit-content",
                  maxHeight: "calc(100vh - 40px)",
                  overflowY: "auto"
                }}
              >
                <StayFilters
                  filters={filters}
                  onFiltersChange={handleFilterChange}
                  onClear={handleClearFilters}
                  variant="sidebar"
                />
              </Paper>
            </Box>
          )}

          <Box style={{ flex: 1, minWidth: 0 }}>
            <Stack gap="xl">
              <Group
                justify="space-between"
                align="flex-start"
                wrap="nowrap"
                gap="md"
              >
                <Stack gap={4} style={{ flex: 1, minWidth: 0 }}>
                  <Group gap="sm">
                    <IconHome size={24} color="var(--mantine-color-blue-6)" />
                    <Title
                      order={2}
                      size={isMobile ? "h4" : "h3"}
                      style={{
                        whiteSpace: isMobile ? "normal" : "nowrap",
                        lineHeight: isMobile ? 1.2 : 1.4
                      }}
                    >
                      {isMobile ? "Hospedagens" : "Hospedagens Alternativas"}
                    </Title>
                  </Group>

                  {isMobile && (
                    <Badge
                      color="gray"
                      variant="dot"
                      size="sm"
                      style={{ alignSelf: "flex-start" }}
                    >
                      {totalListings}{" "}
                      {totalListings === 1 ? "resultado" : "resultados"}
                    </Badge>
                  )}

                  {!isMobile && (
                    <Badge
                      color="blue"
                      variant="light"
                      size="md"
                      style={{ alignSelf: "flex-start", marginTop: 4 }}
                    >
                      {totalListings}{" "}
                      {totalListings === 1 ? "resultado" : "resultados"}
                    </Badge>
                  )}
                </Stack>

                <Group gap="md" wrap="nowrap">
                  {!isMobile && (
                    <SegmentedControl
                      value={viewMode}
                      onChange={(value) => setViewMode(value as ViewMode)}
                      data={[
                        {
                          value: "list",
                          label: (
                            <Group gap="xs" wrap="nowrap">
                              <IconList size={16} />
                              <span>{t("stay.view.list")}</span>
                            </Group>
                          )
                        },
                        {
                          value: "map",
                          label: (
                            <Group gap="xs" wrap="nowrap">
                              <IconMap size={16} />
                              <span>{t("stay.view.map")}</span>
                            </Group>
                          )
                        }
                      ]}
                      size="md"
                      radius="lg"
                      styles={(theme) => ({
                        root: {
                          boxShadow: theme.shadows.xs
                        },
                        control: {
                          transition: "all 0.2s ease",
                          "&:hover": {
                            transform: "translateY(-1px)"
                          }
                        },
                        indicator: {
                          background: `linear-gradient(45deg, ${theme.colors.blue[5]}, ${theme.colors.blue[7]})`,
                          transition:
                            "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
                        }
                      })}
                    />
                  )}

                  {isMobile && (
                    <Stack gap="xs" align="flex-end" style={{ flexShrink: 0 }}>
                      <Group gap="xs" wrap="nowrap">
                        <Button
                          variant="light"
                          size="sm"
                          leftSection={<IconMap size={16} />}
                          onClick={() =>
                            setViewMode(viewMode === "map" ? "list" : "map")
                          }
                        >
                          {viewMode === "map" ? "Lista" : "Mapa"}
                        </Button>

                        <Button
                          variant={showMobileFilters ? "filled" : "light"}
                          leftSection={<IconFilter size={16} />}
                          onClick={() =>
                            setShowMobileFilters(!showMobileFilters)
                          }
                          size="sm"
                        >
                          Filtros
                        </Button>
                      </Group>

                      {getActiveFiltersCount() > 0 && (
                        <Badge color="blue" variant="light" size="sm">
                          {getActiveFiltersCount()} filtro
                          {getActiveFiltersCount() > 1 ? "s" : ""} ativo
                          {getActiveFiltersCount() > 1 ? "s" : ""}
                        </Badge>
                      )}
                    </Stack>
                  )}
                </Group>
              </Group>

              {filteredListings.length > 0 ? (
                <Box style={{ position: "relative", minHeight: "600px" }}>
                  {viewMode === "list" ? (
                    <Stack gap="xl">
                      <Box
                        style={{
                          opacity: 1,
                          transition: "opacity 0.3s ease-in-out",
                          position: "relative",
                          zIndex: 1
                        }}
                      >
                        <SimpleGrid
                          cols={{
                            base: 1,
                            sm: 1,
                            md: isMobile ? 1 : 2,
                            lg: 2,
                            xl: isTablet ? 2 : 3
                          }}
                          spacing="lg"
                          verticalSpacing="lg"
                        >
                          {filteredListings.map((listing) => (
                            <StayCard
                              key={listing.id}
                              listing={listing}
                              onClick={() => setSelectedStay(listing)}
                            />
                          ))}
                        </SimpleGrid>
                      </Box>

                      {totalPages > 1 && (
                        <Stack gap="sm" align="center">
                          <Text size="sm" c="dimmed" ta="center">
                            Mostrando {(currentPage - 1) * 6 + 1}-
                            {Math.min(currentPage * 6, totalListings)} de{" "}
                            {totalListings}{" "}
                            {totalListings === 1 ? "resultado" : "resultados"}
                          </Text>

                          <Pagination
                            value={currentPage}
                            onChange={setCurrentPage}
                            total={totalPages}
                            size={isMobile ? "sm" : "md"}
                            withEdges={!isMobile}
                            siblings={isMobile ? 1 : 2}
                            boundaries={isMobile ? 1 : 2}
                            styles={(theme) => ({
                              control: {
                                "&[data-active]": {
                                  backgroundColor: theme.colors.blue[6],
                                  borderColor: theme.colors.blue[6]
                                },
                                "&:hover:not([data-active])": {
                                  backgroundColor: theme.colors.gray[1]
                                }
                              }
                            })}
                          />
                        </Stack>
                      )}
                    </Stack>
                  ) : (
                    <Box
                      style={{
                        height: "600px",
                        width: "100%",
                        opacity: 1,
                        transition: "opacity 0.3s ease-in-out",
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "var(--mantine-shadow-sm)"
                      }}
                    >
                      <StayMap
                        listings={filteredListings}
                        onListingClick={setSelectedStay}
                        selectedListing={selectedStay}
                      />
                    </Box>
                  )}
                </Box>
              ) : (
                <Stack align="center" py={80} gap="md">
                  <EmptyState
                    icon="🏠"
                    title={t("stay.noResults").replace(
                      '"{searchTerm}"',
                      filters.search || "filtros selecionados"
                    )}
                    description="Tente ajustar os filtros ou buscar por outros termos"
                  />
                  <Button onClick={handleClearFilters} variant="light">
                    {t("stay.filters.clear")}
                  </Button>
                </Stack>
              )}
            </Stack>
          </Box>
        </Flex>
      </Container>

      {isMobile && (
        <StayFilters
          filters={filters}
          onFiltersChange={handleFilterChange}
          onClear={handleClearFilters}
          opened={showMobileFilters}
          onClose={() => setShowMobileFilters(false)}
          variant="drawer"
        />
      )}

      <StayDetailModal
        listing={selectedStay}
        opened={!!selectedStay}
        onClose={() => setSelectedStay(null)}
      />
    </PageLayout>
  );
};
