import {
  Card,
  Badge,
  Group,
  Button,
  Stack,
  Text,
  Rating,
  Tooltip
} from "@mantine/core";
import { IconMessage, IconCheck, IconGift } from "@tabler/icons-react";
import { TourGuide } from "../../types/guides";
import { useLanguage } from "../../hooks/useLanguage";
import { GuideAvatar } from "../common/GuideAvatar";

interface GuideCardProps {
  guide: TourGuide;
  onViewDetails: (guide: TourGuide) => void;
  onContact: (guide: TourGuide) => void;
}

export const GuideCard: React.FC<GuideCardProps> = ({
  guide,
  onViewDetails,
  onContact
}) => {
  const { t } = useLanguage();

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer"
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
      onClick={() => onViewDetails(guide)}
    >
      <Card.Section>
        <GuideAvatar src={guide.photo} alt={guide.name} height={140} />
      </Card.Section>

      <Stack gap="xs" mt="md">
        {/* Nome e Badges de Status */}

        <Text fw={600} size="md" lineClamp={1} flex={1}>
          {guide.name}
        </Text>
        <Group justify="space-between" align="flex-start">
          <Group gap={4}>
            {guide.verified && (
              <Tooltip label={t("guides.details.verified")}>
                <Badge
                  variant="filled"
                  color="blue"
                  size="xs"
                  leftSection={<IconCheck size={10} />}
                >
                  {t("guides.details.verified")}
                </Badge>
              </Tooltip>
            )}

            {guide.free && (
              <Tooltip label={t("guides.details.free")}>
                <Badge
                  variant="filled"
                  color="green"
                  size="xs"
                  leftSection={<IconGift size={10} />}
                >
                  {t("guides.details.free")}
                </Badge>
              </Tooltip>
            )}
          </Group>
        </Group>

        {/* Especialidade */}
        <Text size="sm" c="dimmed" lineClamp={1}>
          {guide.specialties?.join(", ") || t("guides.categories.cultural")}
        </Text>

        {/* Rating e Idiomas */}
        <Group justify="space-between" align="center">
          <Group gap="xs">
            <Rating value={guide.rating || 0} readOnly size="sm" />
            <Text size="xs" c="dimmed">
              ({(guide.rating || 0).toFixed(1)})
            </Text>
          </Group>

          <Badge variant="light" size="sm">
            {guide.languages?.slice(0, 2).join(", ") || "Português"}
          </Badge>
        </Group>

        {/* Descrição */}
        <Text size="sm" c="dimmed" lineClamp={2} style={{ minHeight: 40 }}>
          {guide.description || "Guia experiente em Belém"}
        </Text>

        {/* Botões de Ação */}
        <Group justify="space-between" mt="auto" pt="xs" gap="xs">
          <Button
            variant="light"
            size="sm"
            style={{ flex: 1 }}
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(guide);
            }}
          >
            {t("common.viewDetails")}
          </Button>

          <Button
            variant="filled"
            size="sm"
            leftSection={<IconMessage size={14} />}
            onClick={(e) => {
              e.stopPropagation();
              onContact(guide);
            }}
          >
            {t("guides.details.contact")}
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};
