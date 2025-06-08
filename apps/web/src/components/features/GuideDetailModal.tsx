import React from "react";
import { Badge, Group, Stack, Text, Divider } from "@mantine/core";
import { IconMessage, IconMapPin, IconClock } from "@tabler/icons-react";
import { TourGuide } from "../../types/guides";
import { useLanguage } from "../../hooks/useLanguage";
import { getCategoryIcon } from "../../constants";
import { GuideAvatar } from "../common/GuideAvatar";
import { BaseModal, StatusBadge, RatingDisplay, InfoRow } from "../ui";

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
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={guide.name}
      size="lg"
      primaryAction={{
        label: t("guides.details.contact"),
        onClick: () => {
          // Implementar lógica de contato
        },
        icon: <IconMessage size={16} />
      }}
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
            <RatingDisplay rating={guide.rating} showValue={false} size="md" />
          )}
        </Group>

        {/* Badges */}
        <Group gap="sm">
          {guide.free && (
            <StatusBadge type="free" label={t("guides.details.free")} />
          )}
          {guide.verified && (
            <StatusBadge type="verified" label={t("guides.details.verified")} />
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
        {guide.location && <InfoRow icon={IconMapPin} text={guide.location} />}

        {/* Disponibilidade (se disponível) */}
        {guide.availability && (
          <InfoRow icon={IconClock} text={guide.availability} />
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
      </Stack>
    </BaseModal>
  );
};
