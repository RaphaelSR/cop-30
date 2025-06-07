import React from "react";
import {
  Modal,
  Badge,
  Group,
  Button,
  Stack,
  Text,
  Divider
} from "@mantine/core";
import {
  IconStar,
  IconMessage,
  IconMapPin,
  IconClock
} from "@tabler/icons-react";
import { TourGuide } from "../../types/guides";
import { useLanguage } from "../../hooks/useLanguage";
import { getCategoryIcon } from "../../constants";
import { GuideAvatar } from "../common/GuideAvatar";

interface GuideDetailModalProps {
  guide: TourGuide;
  isOpen: boolean;
  onClose: () => void;
}

export const GuideDetailModal: React.FC<GuideDetailModalProps> = ({
  guide,
  isOpen,
  onClose
}) => {
  const { t } = useLanguage();

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title={guide.name}
      size="lg"
      centered
    >
      <Stack gap="md">
        {/* Imagem */}
        <GuideAvatar
          src={guide.photo}
          alt={guide.name || "Guia"}
          height={200}
          radius="md"
          style={{ borderRadius: 8 }}
        />

        {/* Informações Principais */}
        <Group justify="space-between">
          <Group gap="xs">
            <Text size="1.2rem">{getCategoryIcon(guide.category)}</Text>
            <Text size="lg" fw={600}>
              {t(`guides.categories.${guide.category}`)}
            </Text>
          </Group>

          {guide.rating && (
            <Group gap={4}>
              <IconStar
                size={18}
                fill="currentColor"
                style={{ color: "#fbbf24" }}
              />
              <Text size="lg" fw={500}>
                {guide.rating}
              </Text>
            </Group>
          )}
        </Group>

        {/* Badges */}
        <Group gap="sm">
          {guide.free && (
            <Badge variant="light" color="green">
              {t("guides.details.free")}
            </Badge>
          )}
          {guide.verified && (
            <Badge variant="light" color="blue">
              {t("guides.details.verified")}
            </Badge>
          )}
        </Group>

        <Divider />

        {/* Descrição */}
        <div>
          <Text size="sm" fw={600} mb="xs">
            {t("common.about")}
          </Text>
          <Text size="sm" c="dimmed">
            {guide.description || "Guia experiente em Belém"}
          </Text>
        </div>

        {/* Idiomas */}
        <div>
          <Text size="sm" fw={600} mb="xs">
            {t("guides.details.languages")}
          </Text>
          <Group gap="xs">
            {(guide.languages || []).map((language) => (
              <Badge key={language} variant="outline" size="sm">
                {language}
              </Badge>
            ))}
          </Group>
        </div>

        {/* Especialidades (se disponível) */}
        {guide.specialties && guide.specialties.length > 0 && (
          <div>
            <Text size="sm" fw={600} mb="xs">
              {t("guides.details.category")}
            </Text>
            <Group gap="xs">
              {guide.specialties.map((specialty) => (
                <Badge key={specialty} variant="light" size="sm">
                  {specialty}
                </Badge>
              ))}
            </Group>
          </div>
        )}

        {/* Localização (se disponível) */}
        {guide.location && (
          <Group gap="xs">
            <IconMapPin
              size={16}
              style={{ color: "var(--mantine-color-dimmed)" }}
            />
            <Text size="sm" c="dimmed">
              {guide.location}
            </Text>
          </Group>
        )}

        {/* Disponibilidade (se disponível) */}
        {guide.availability && (
          <Group gap="xs">
            <IconClock
              size={16}
              style={{ color: "var(--mantine-color-dimmed)" }}
            />
            <Text size="sm" c="dimmed">
              {guide.availability}
            </Text>
          </Group>
        )}

        {/* Preços (se disponível) */}
        {guide.priceRange && (
          <div>
            <Text size="sm" fw={600} mb="xs">
              {t("common.pricing")}
            </Text>
            <Text size="sm" c="dimmed">
              {guide.priceRange}
            </Text>
          </div>
        )}

        <Divider />

        {/* Botões de Ação */}
        <Group justify="space-between">
          <Button variant="outline" onClick={onClose} style={{ flex: 1 }}>
            {t("common.close")}
          </Button>
          <Button leftSection={<IconMessage size={16} />} style={{ flex: 1 }}>
            {t("guides.details.contact")}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
