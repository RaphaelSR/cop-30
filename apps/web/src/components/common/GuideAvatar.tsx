import React from "react";
import { Image, Box } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";

interface GuideAvatarProps {
  src?: string;
  alt?: string;
  height?: number;
  radius?: string | number;
  style?: React.CSSProperties;
}

export const GuideAvatar: React.FC<GuideAvatarProps> = ({
  src,
  alt = "Guia",
  height = 140,
  radius = 0,
  style = { objectFit: "cover" }
}) => {
  const [imageError, setImageError] = React.useState(false);

  // Se não há src ou houve erro, mostra o avatar padrão
  if (!src || imageError) {
    return (
      <Box
        style={{
          height: "260px",
          width: "100%",
          minHeight: height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--mantine-color-gray-1)",
          borderRadius: radius,
          position: "relative"
        }}
      >
        <IconUser
          size={height * 0.4}
          color="var(--mantine-color-gray-6)"
          //   style={{
          //     position: "absolute",
          //     top: "50%",
          //     left: "50%",
          //     transform: "translate(-50%, -50%)"
          //   }}
        />
      </Box>
    );
  }

  return (
    <Image
      src={src}
      height={height}
      alt={alt}
      radius={radius}
      style={style}
      onError={() => setImageError(true)}
    />
  );
};
