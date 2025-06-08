import React, { useState, useCallback } from "react";
import {
  Box,
  Paper,
  Text,
  Group,
  Badge,
  Stack,
  LoadingOverlay,
  Button
} from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow
} from "@vis.gl/react-google-maps";
import { useLanguage } from "../../hooks/useLanguage";
import { getStayTypeIcon } from "../../constants";
import { MapFallback } from "./MapFallback";
import { ImageCarousel } from "../ui/ImageCarousel";
import type { Listing } from "../../types/stay";

interface StayMapProps {
  listings: Listing[];
  onListingClick: (listing: Listing) => void;
  selectedListing?: Listing | null;
}

// Coordenadas de Belém do Pará
const BELEM_COORDINATES = {
  lat: -1.4558,
  lng: -48.4902
};

// Mock de coordenadas para os bairros de Belém
const NEIGHBORHOOD_COORDINATES: Record<string, { lat: number; lng: number }> = {
  centro: { lat: -1.4558, lng: -48.4902 },
  cidadeVelha: { lat: -1.462, lng: -48.5016 },
  ilhaDoCombu: { lat: -1.52, lng: -48.44 },
  nazare: { lat: -1.445, lng: -48.485 },
  umarizal: { lat: -1.44, lng: -48.48 },
  batista: { lat: -1.45, lng: -48.475 }
};

export const StayMap: React.FC<StayMapProps> = ({
  listings,
  onListingClick
}) => {
  const { t } = useLanguage();
  const [selectedMarker, setSelectedMarker] = useState<Listing | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Função para obter coordenadas de um listing
  const getListingCoordinates = useCallback((listing: Listing) => {
    const baseCoords =
      NEIGHBORHOOD_COORDINATES[listing.neighborhood] || BELEM_COORDINATES;

    // Adiciona um pequeno offset aleatório para evitar sobreposição de marcadores
    const offsetLat = (Math.random() - 0.5) * 0.01;
    const offsetLng = (Math.random() - 0.5) * 0.01;

    return {
      lat: baseCoords.lat + offsetLat,
      lng: baseCoords.lng + offsetLng
    };
  }, []);

  const handleMarkerClick = useCallback((listing: Listing) => {
    setSelectedMarker(listing);
  }, []);

  const handleInfoWindowClose = useCallback(() => {
    setSelectedMarker(null);
  }, []);

  const handleViewDetails = useCallback(
    (listing: Listing) => {
      onListingClick(listing);
      setSelectedMarker(null);
    },
    [onListingClick]
  );

  const handleMapError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  // Se houver erro, exibe o fallback
  if (hasError) {
    return <MapFallback listings={listings} onListingClick={onListingClick} />;
  }

  return (
    <Box style={{ height: "600px", width: "100%", position: "relative" }}>
      {!import.meta.env.VITE_GOOGLE_MAPS_API_KEY ? (
        <MapFallback listings={listings} onListingClick={onListingClick} />
      ) : (
        <APIProvider
          apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          onError={handleMapError}
        >
          <Map
            defaultCenter={BELEM_COORDINATES}
            defaultZoom={12}
            mapId="stay-map"
            onTilesLoaded={() => setIsLoading(false)}
            style={{ width: "100%", height: "100%" }}
            gestureHandling="auto"
            disableDefaultUI={false}
            clickableIcons={false}
          >
            {listings.map((listing) => {
              const position = getListingCoordinates(listing);
              const isSelected = selectedMarker?.id === listing.id;
              const isAvailable = listing.price <= 150; // Mock availability logic

              return (
                <Marker
                  key={listing.id}
                  position={position}
                  onClick={() => handleMarkerClick(listing)}
                  icon={{
                    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                    <svg width="40" height="48" viewBox="0 0 40 48" xmlns="http://www.w3.org/2000/svg">
                      <!-- Shadow -->
                      <ellipse cx="20" cy="44" rx="8" ry="4" fill="rgba(0,0,0,0.2)"/>
                      
                      <!-- Main marker shape -->
                      <path d="M20 4 C12 4 6 10 6 18 C6 28 20 40 20 40 S34 28 34 18 C34 10 28 4 20 4 Z" 
                            fill="${isAvailable ? "#51cf66" : "#ff6b6b"}" 
                            stroke="white" 
                            stroke-width="2"/>
                      
                      <!-- Inner circle -->
                      <circle cx="20" cy="18" r="8" fill="white" opacity="0.9"/>
                      
                      <!-- Icon -->
                      <text x="20" y="23" text-anchor="middle" fill="${
                        isAvailable ? "#51cf66" : "#ff6b6b"
                      }" 
                            font-size="14" font-family="Arial" font-weight="bold">
                        ${getStayTypeIcon(listing.type)}
                      </text>
                      
                      ${
                        isSelected
                          ? `
                      <!-- Selection ring -->
                      <circle cx="20" cy="18" r="12" fill="none" stroke="#228be6" stroke-width="3" opacity="0.8"/>
                      `
                          : ""
                      }
                    </svg>
                  `)}`,
                    scaledSize: { width: 40, height: 48, equals: () => false },
                    anchor: { x: 20, y: 40, equals: () => false }
                  }}
                />
              );
            })}

            {/* Info Window for Selected Marker */}
            {selectedMarker && (
              <InfoWindow
                position={getListingCoordinates(selectedMarker)}
                onCloseClick={handleInfoWindowClose}
              >
                <Paper
                  shadow="lg"
                  radius="md"
                  style={{
                    width: 300,
                    overflow: "hidden"
                  }}
                >
                  <Stack gap="sm" p={0}>
                    {/* Image Carousel */}
                    {selectedMarker.images &&
                    selectedMarker.images.length > 1 ? (
                      <ImageCarousel
                        images={selectedMarker.images}
                        alt={selectedMarker.title}
                        height={160}
                        borderRadius="0"
                        showArrows={true}
                        showIndicators={true}
                      />
                    ) : (
                      <Box style={{ height: 160, overflow: "hidden" }}>
                        <img
                          src={selectedMarker.imageUrl}
                          alt={selectedMarker.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          }}
                        />
                      </Box>
                    )}

                    {/* Content */}
                    <Stack gap="xs" p="sm">
                      {/* Title and Price */}
                      <Group justify="space-between" align="flex-start">
                        <Stack gap={2} style={{ flex: 1, minWidth: 0 }}>
                          <Text size="md" fw={600} lineClamp={1}>
                            {selectedMarker.title}
                          </Text>
                          <Text size="sm" c="dimmed" lineClamp={1}>
                            {selectedMarker.subtitle}
                          </Text>
                        </Stack>

                        <Text
                          size="lg"
                          fw={700}
                          c="green.6"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {selectedMarker.currency}
                          {selectedMarker.price}
                          <Text component="span" size="xs" c="dimmed" ml={2}>
                            /{t("stay.details.perNight")}
                          </Text>
                        </Text>
                      </Group>

                      {/* Type and Neighborhood Badges */}
                      <Stack gap="xs">
                        <Group gap="xs" wrap="wrap">
                          <Badge
                            variant="light"
                            color="blue"
                            size="sm"
                            leftSection={
                              <span style={{ fontSize: "10px" }}>
                                {getStayTypeIcon(selectedMarker.type)}
                              </span>
                            }
                          >
                            {t(`listings.types.${selectedMarker.type}`)}
                          </Badge>

                          <Badge
                            variant="outline"
                            size="sm"
                            leftSection={<IconMapPin size={10} />}
                            style={{ maxWidth: "140px" }}
                          >
                            <Text size="xs" truncate>
                              {t(
                                `listings.neighborhoods.${selectedMarker.neighborhood}`
                              )}
                            </Text>
                          </Badge>
                        </Group>
                      </Stack>

                      {/* Description */}
                      <Text size="sm" lineClamp={2} c="dimmed">
                        {selectedMarker.description}
                      </Text>

                      {/* Host and Actions */}
                      <Group justify="space-between" align="center" pt="xs">
                        <Text size="xs" c="dimmed" style={{ flex: 1 }}>
                          {t("common.by")}{" "}
                          <Text component="span" fw={500}>
                            {selectedMarker.host.name}
                          </Text>
                        </Text>
                      </Group>

                      <Button
                        size="sm"
                        variant="filled"
                        fullWidth
                        mt="xs"
                        onClick={() => handleViewDetails(selectedMarker)}
                      >
                        {t("common.viewMore")}
                      </Button>
                    </Stack>
                  </Stack>
                </Paper>
              </InfoWindow>
            )}
          </Map>

          <LoadingOverlay
            visible={isLoading}
            loaderProps={{
              children: (
                <Stack align="center" gap="xs">
                  <Text size="sm">{t("stay.map.loading")}</Text>
                </Stack>
              )
            }}
          />
        </APIProvider>
      )}
    </Box>
  );
};
