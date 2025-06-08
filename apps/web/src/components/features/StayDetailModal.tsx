import React from "react";
import {
  Image,
  Text,
  Badge,
  Group,
  Stack,
  Avatar,
  Divider,
  SimpleGrid,
  Paper
} from "@mantine/core";
import { IconMapPin, IconUsers, IconBrandWhatsapp } from "@tabler/icons-react";
import { type Listing } from "../../types/stay";
import { useLanguage } from "../../hooks/useLanguage";
import { getStayTypeIcon } from "../../constants";
import { ImageCarousel } from "../ui/ImageCarousel";
import { BaseModal, StatusBadge } from "../ui";

interface StayDetailModalProps {
  listing: Listing | null;
  opened: boolean;
  onClose: () => void;
}

export const StayDetailModal: React.FC<StayDetailModalProps> = ({
  listing,
  opened,
  onClose
}) => {
  const { t } = useLanguage();

  if (!listing) return null;

  const formatWhatsApp = (phone: string) => {
    return phone.replace(/\D/g, "");
  };

  return (
    <BaseModal
      isOpen={opened}
      onClose={onClose}
      title={listing.title}
      size="lg"
      primaryAction={{
        label: t("stay.details.contactHost"),
        onClick: () => {
          const message = encodeURIComponent(
            `Olá ${listing.host.name}! Tenho interesse na hospedagem "${listing.title}" durante a COP 30. Poderia me passar mais informações?`
          );
          window.open(
            `https://wa.me/${formatWhatsApp(
              listing.host.whatsapp
            )}?text=${message}`,
            "_blank"
          );
        },
        icon: <IconBrandWhatsapp size={20} />,
        variant: "filled"
      }}
    >
      <Stack gap="md">
        {/* Image Carousel */}
        {listing.images && listing.images.length > 1 ? (
          <ImageCarousel
            images={listing.images}
            alt={listing.title}
            height={300}
            borderRadius="12px"
          />
        ) : (
          <Image
            src={listing.imageUrl}
            height={300}
            alt={listing.title}
            radius="md"
            fallbackSrc="/default-image.jpg"
            style={{ objectFit: "cover" }}
          />
        )}

        {/* Main Info */}
        <Group justify="space-between" align="flex-start">
          <Stack gap="xs" style={{ flex: 1 }}>
            <Text size="xl" fw={600}>
              {listing.title}
            </Text>
            <Text size="md" c="dimmed">
              {listing.subtitle}
            </Text>
          </Stack>

          <Paper p="md" radius="md" withBorder>
            <Text size="xl" fw={700} c="green.6" ta="center">
              {listing.currency}
              {listing.price}
            </Text>
            <Text size="sm" c="dimmed" ta="center">
              / {t("stay.details.perNight")}
            </Text>
          </Paper>
        </Group>

        {/* Type, Location and Capacity */}
        <Group gap="md">
          <Badge
            size="lg"
            variant="light"
            color="blue"
            leftSection={
              <span style={{ fontSize: "14px" }}>
                {getStayTypeIcon(listing.type)}
              </span>
            }
          >
            {t(`listings.types.${listing.type}`) || listing.type}
          </Badge>

          <Badge
            size="lg"
            variant="outline"
            leftSection={<IconMapPin size={14} />}
          >
            {t(`listings.neighborhoods.${listing.neighborhood}`) ||
              listing.neighborhood}
          </Badge>

          <Badge
            size="lg"
            variant="outline"
            leftSection={<IconUsers size={14} />}
          >
            {listing.capacity} {t("stay.details.people")}
          </Badge>
        </Group>

        <Divider />

        {/* Host Information */}
        <Paper p="md" radius="md" withBorder>
          <Group gap="md">
            <Avatar size="lg" color="blue">
              {listing.host.name.charAt(0)}
            </Avatar>

            <Stack gap="xs" style={{ flex: 1 }}>
              <Group gap="xs">
                <Text size="lg" fw={500}>
                  {listing.host.name}
                </Text>
                {listing.host.verified && (
                  <StatusBadge
                    type="verified"
                    label={t("stay.details.verified")}
                    size="sm"
                  />
                )}
              </Group>

              <Text size="sm" c="dimmed">
                {t("stay.details.host")}
              </Text>
            </Stack>
          </Group>
        </Paper>

        {/* Description */}
        <Stack gap="xs">
          <Text size="lg" fw={500}>
            {t("stay.details.about")}
          </Text>
          <Text size="md">{listing.description}</Text>
        </Stack>

        <Divider />

        {/* Amenities */}
        <Stack gap="xs">
          <Text size="lg" fw={500}>
            {t("stay.details.amenities")}
          </Text>
          <SimpleGrid cols={{ base: 2, sm: 3 }} spacing="xs">
            {listing.amenities.map((amenity, index) => (
              <Badge key={index} variant="light" size="md">
                {amenity}
              </Badge>
            ))}
          </SimpleGrid>
        </Stack>

        <Divider />

        {/* Contact Actions */}
        <Stack gap="md">
          <Text size="lg" fw={500}>
            {t("stay.details.contactVia")}
          </Text>

          <Text size="sm" c="dimmed" ta="center">
            Entre em contato diretamente com o anfitrião
          </Text>
        </Stack>
      </Stack>
    </BaseModal>
  );
};
