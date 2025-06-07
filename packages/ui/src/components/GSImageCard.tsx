import React from "react";
import { cn, colors, shadows, borderRadius } from "../tokens";

export interface GSImageCardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  ctaText?: string;
  onCtaPress?: () => void;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const GSImageCard: React.FC<GSImageCardProps> = ({
  title,
  subtitle,
  imageUrl,
  ctaText = "Ver detalhes",
  onCtaPress,
  width = "100%",
  height = 200,
  className
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-white dark:bg-gray-800",
        borderRadius.lg,
        shadows.md,
        className
      )}
      style={{ width, height }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Conteúdo */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">
          {title}
        </h3>

        {subtitle && (
          <p className="text-sm text-gray-200 mb-3 line-clamp-2">{subtitle}</p>
        )}

        {onCtaPress && (
          <button
            onClick={onCtaPress}
            className={cn(
              "px-3 py-1.5 text-sm font-medium text-white rounded-md",
              `bg-${colors.primary}`,
              "hover:opacity-90 transition-opacity"
            )}
          >
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
};
