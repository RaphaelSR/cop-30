import React from "react";
import { Box, Group, Text, RangeSlider } from "@mantine/core";

export interface FilterRangeProps {
  label: string;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  min: number;
  max: number;
  step?: number;
  marks?: Array<{ value: number; label: string }>;
  formatValue?: (value: number) => string;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Slider de faixa de valores reutilizável para filtros
 * Implementa o padrão DRY para seleção de faixas numéricas
 */
export const FilterRange: React.FC<FilterRangeProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  marks = [],
  formatValue = (val) => val.toString(),
  showValue = true,
  size = "lg",
  className
}) => {
  return (
    <Box className={className}>
      <Group justify="space-between" mb="md">
        <Text size="sm" fw={500}>
          {label}
        </Text>
        {showValue && (
          <Text size="sm" fw={600} c="blue.6">
            {formatValue(value[0])} - {formatValue(value[1])}
          </Text>
        )}
      </Group>
      <Box px="xs" pb="md">
        <RangeSlider
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          marks={marks}
          size={size}
          radius="xl"
          styles={(theme) => ({
            track: {
              height: 12,
              borderRadius: 6,
              background: `linear-gradient(to right, ${theme.colors.gray[2]}, ${theme.colors.gray[3]})`
            },
            bar: {
              height: 12,
              borderRadius: 6,
              background: `linear-gradient(45deg, ${theme.colors.blue[5]}, ${theme.colors.blue[7]})`
            },
            thumb: {
              width: 24,
              height: 24,
              borderWidth: 3,
              borderColor: theme.white,
              background: theme.colors.blue[6],
              transition: "all 0.2s ease",
              "&:hover": {
                transform: "scale(1.1)",
                background: theme.colors.blue[7]
              }
            },
            markLabel: {
              fontSize: 11,
              fontWeight: 500,
              color: theme.colors.gray[6],
              marginTop: 8
            }
          })}
        />
      </Box>
    </Box>
  );
};
