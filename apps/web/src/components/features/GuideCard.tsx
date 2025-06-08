import { Card, Badge, Group, Stack, Text } from "@mantine/core";
import { TourGuide } from "../../types/guides";
import { useLanguage } from "../../hooks/useLanguage";
import { GuideAvatar } from "../common/GuideAvatar";
import { StatusBadge, RatingDisplay, ActionButtonGroup } from "../ui";

interface GuideCardProps {
  guide: TourGuide;
  onViewDetails: (guide: TourGuide) => void;
}

export const GuideCard: React.FC<GuideCardProps> = ({
  guide,
  onViewDetails
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
        <GuideAvatar src={guide.photo} alt={guide.name} />
      </Card.Section>

      <Stack gap="xs" mt="md">
        {/* Nome e Badges de Status */}
        <Text fw={600} size="md" lineClamp={1} flex={1}>
          {guide.name}
        </Text>
        <Group justify="space-between" align="flex-start">
          <Group gap={4}>
            {guide.verified && (
              <StatusBadge
                type="verified"
                tooltip={t("guides.details.verified")}
                label={t("guides.details.verified")}
              />
            )}

            {guide.free && (
              <StatusBadge
                type="free"
                tooltip={t("guides.details.free")}
                label={t("guides.details.free")}
              />
            )}
          </Group>
        </Group>

        {/* Especialidade */}
        <Text size="sm" c="dimmed" lineClamp={1}>
          {guide.specialties?.join(", ") || t("guides.categories.cultural")}
        </Text>

        {/* Rating e Idiomas */}
        <Group justify="space-between" align="center">
          <RatingDisplay rating={guide.rating || 0} showValue size="sm" />

          <Badge variant="light" size="sm">
            {guide.languages?.slice(0, 2).join(", ") || "Português"}
          </Badge>
        </Group>

        {/* Descrição */}
        <Text size="sm" c="dimmed" lineClamp={2} style={{ minHeight: 40 }}>
          {guide.description || "Guia experiente em Belém"}
        </Text>

        {/* Botões de Ação */}
        <Group mt="auto" pt="xs">
          <ActionButtonGroup
            actions={[
              {
                label: t("common.viewDetails"),
                variant: "filled",
                size: "sm",
                flex: 1,
                onClick: (e?: React.MouseEvent) => {
                  e?.stopPropagation();
                  onViewDetails(guide);
                }
              }
            ]}
            fullWidth
          />
        </Group>
      </Stack>
    </Card>
  );
};
