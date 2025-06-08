import React from "react";
import {
  Paper,
  Text,
  Group,
  Badge,
  Stack,
  SimpleGrid,
  Center,
  Button
} from "@mantine/core";
import { IconMapPin, IconAlertCircle } from "@tabler/icons-react";
import { useLanguage } from "../../hooks/useLanguage";
import { getStayTypeIcon } from "../../constants";
import type { Listing } from "../../types/stay";

interface MapFallbackProps {
  listings: Listing[];
  onListingClick: (listing: Listing) => void;
  error?: string;
}

export const MapFallback: React.FC<MapFallbackProps> = ({
  listings,
  onListingClick,
  error
}) => {
  const { t } = useLanguage();

  if (error) {
    return (
      <Paper p="xl" withBorder style={{ height: "500px" }}>
        <Center style={{ height: "100%" }}>
          <Stack align="center" gap="md">
            <IconAlertCircle size={48} color="var(--mantine-color-red-6)" />
            <Text size="lg" fw={600} ta="center">
              {t("stay.map.error") || "Erro ao carregar o mapa"}
            </Text>
            <Text size="sm" c="dimmed" ta="center">
              {error}
            </Text>
            <Text size="xs" c="dimmed" ta="center">
              Verifique se a chave da API do Google Maps está configurada
              corretamente.
            </Text>
          </Stack>
        </Center>
      </Paper>
    );
  }

  return (
    <Paper p="md" withBorder style={{ height: "500px", overflow: "auto" }}>
      <Stack gap="md">
        <Group gap="sm">
          <IconMapPin size={20} color="var(--mantine-color-blue-6)" />
          <Text size="lg" fw={600}>
            {t("stay.map.fallbackTitle") || "Hospedagens por Localização"}
          </Text>
        </Group>

        <Text size="sm" c="dimmed">
          {t("stay.map.fallbackDescription") ||
            "Visualização alternativa organizada por bairros"}
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          {listings.map((listing) => (
            <Paper
              key={listing.id}
              p="md"
              withBorder
              style={{ cursor: "pointer" }}
              onClick={() => onListingClick(listing)}
            >
              <Stack gap="xs">
                <Group justify="space-between" align="flex-start">
                  <Text size="sm" fw={600} lineClamp={1} style={{ flex: 1 }}>
                    {listing.title}
                  </Text>
                  <Text size="sm" fw={600} c="green.6">
                    {listing.currency}
                    {listing.price}
                  </Text>
                </Group>

                <Group gap="xs">
                  <Badge size="xs" variant="light" color="blue">
                    {getStayTypeIcon(listing.type)}{" "}
                    {t(`listings.types.${listing.type}`)}
                  </Badge>
                  <Badge size="xs" variant="outline">
                    <IconMapPin size={8} />{" "}
                    {t(`listings.neighborhoods.${listing.neighborhood}`)}
                  </Badge>
                </Group>

                <Text size="xs" c="dimmed" lineClamp={2}>
                  {listing.description}
                </Text>

                <Group justify="space-between" align="center">
                  <Text size="xs" c="dimmed">
                    {t("common.by")} {listing.host.name}
                  </Text>
                  <Button size="xs" variant="light">
                    {t("common.viewMore")}
                  </Button>
                </Group>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </Paper>
  );
};
