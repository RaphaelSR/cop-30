import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Stack,
  Avatar,
  Tooltip,
  Box
} from "@mantine/core";
import { IconCheck, IconMapPin, IconUsers } from "@tabler/icons-react";
import { type Listing } from "../../types/stay";
import { useLanguage } from "../../hooks/useLanguage";
import { getStayTypeIcon } from "../../constants";
import { ImageCarousel } from "../ui/ImageCarousel";

interface StayCardProps {
  listing: Listing;
  onClick: () => void;
}

export const StayCard: React.FC<StayCardProps> = ({ listing, onClick }) => {
  const { t } = useLanguage();

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column"
      }}
      __vars={{
        "--card-hover": "0 8px 32px rgba(0, 0, 0, 0.12)"
      }}
      styles={{
        root: {
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "var(--card-hover)"
          }
        }
      }}
      onClick={onClick}
    >
      <Card.Section style={{ height: "300px", overflow: "hidden" }}>
        {listing.images && listing.images.length > 1 ? (
          <ImageCarousel
            images={listing.images}
            alt={listing.title}
            height={300}
            borderRadius="0"
          />
        ) : (
          <Image
            src={listing.imageUrl}
            height={300}
            alt={listing.title}
            fallbackSrc="/default-image.jpg"
            style={{ objectFit: "cover" }}
          />
        )}
      </Card.Section>

      <Stack
        gap="sm"
        mt="md"
        style={{ flex: 1, justifyContent: "space-between" }}
      >
        {/* Conteúdo Principal */}
        <Stack gap="sm">
          {/* Header with Type and Price - Bloco 1 */}
          <Group justify="space-between" align="flex-start" mb={4}>
            <Box style={{ flex: 1, minWidth: 0 }}>
              <Text size="lg" fw={600} lineClamp={1}>
                {listing.title}
              </Text>
              <Text size="sm" c="dimmed" lineClamp={1} mt={2}>
                {listing.subtitle}
              </Text>
            </Box>

            <Text
              size="xl"
              fw={700}
              c="green.6"
              style={{ whiteSpace: "nowrap" }}
            >
              {listing.currency}
              {listing.price}
              <Text component="span" size="sm" c="dimmed" ml={4}>
                / {t("stay.details.perNight")}
              </Text>
            </Text>
          </Group>

          {/* Type, Neighborhood and Capacity - Bloco 2 */}
          <Group gap="xs" wrap="nowrap" style={{ overflowX: "auto" }} mb={6}>
            <Badge
              variant="light"
              color="blue"
              size="sm"
              leftSection={
                <span style={{ fontSize: "10px" }}>
                  {getStayTypeIcon(listing.type)}
                </span>
              }
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              {t(`listings.types.${listing.type}`) || listing.type}
            </Badge>

            <Badge
              variant="outline"
              size="sm"
              leftSection={<IconMapPin size={10} />}
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              {(
                t(`listings.neighborhoods.${listing.neighborhood}`) ||
                listing.neighborhood
              ).length > 12
                ? (
                    t(`listings.neighborhoods.${listing.neighborhood}`) ||
                    listing.neighborhood
                  ).substring(0, 12) + "..."
                : t(`listings.neighborhoods.${listing.neighborhood}`) ||
                  listing.neighborhood}
            </Badge>

            <Badge
              variant="outline"
              size="sm"
              leftSection={<IconUsers size={10} />}
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              {listing.capacity}
            </Badge>
          </Group>

          {/* Host Info - Bloco 3 */}
          <Group gap="xs" mb={4}>
            <Avatar size="sm" color="gray">
              {listing.host.name.charAt(0)}
            </Avatar>
            <Text size="sm" style={{ flex: 1 }}>
              {t("common.by")}{" "}
              <Text component="span" fw={500}>
                {listing.host.name}
              </Text>
            </Text>
            {listing.host.verified && (
              <Tooltip label={t("stay.details.verified")}>
                <Badge
                  size="xs"
                  color="green"
                  leftSection={<IconCheck size={8} />}
                >
                  {t("stay.details.verified")}
                </Badge>
              </Tooltip>
            )}
          </Group>

          {/* Description - Bloco 4 */}
          <Text
            size="sm"
            c="dimmed"
            lineClamp={2}
            style={{ minHeight: 40 }}
            mb={6}
          >
            {listing.description}
          </Text>

          {/* Amenities - Bloco 5 */}
          <Group gap={6} style={{ minHeight: 20 }}>
            {listing.amenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="dot" size="xs" color="gray">
                {amenity}
              </Badge>
            ))}
            {listing.amenities.length > 3 && (
              <Badge variant="dot" size="xs" color="gray">
                +{listing.amenities.length - 3}
              </Badge>
            )}
          </Group>
        </Stack>

        {/* Action Button - Bloco 6 */}
        <Box pt="md" pb={4}>
          <Button
            variant="filled"
            size="sm"
            fullWidth
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            {t("common.viewMore")}
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};
