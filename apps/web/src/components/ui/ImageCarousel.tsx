import { useState } from "react";
import { Box, ActionIcon, Group } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  height?: number | string;
  borderRadius?: string;
  showIndicators?: boolean;
  showArrows?: boolean;
}

export function ImageCarousel({
  images,
  alt,
  height = 200,
  borderRadius = "8px",
  showIndicators = true,
  showArrows = true
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Se houver apenas uma imagem, mostrar apenas ela
  if (images.length <= 1) {
    return (
      <Box
        style={{
          position: "relative",
          height,
          overflow: "hidden",
          borderRadius
        }}
      >
        <img
          src={images[0]}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </Box>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      style={{
        position: "relative",
        height,
        overflow: "hidden",
        borderRadius
      }}
    >
      {" "}
      {/* Contador de imagens */}
      {/* <Box
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "4px 8px",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: 500,
          zIndex: 3
        }}
      >
        {currentIndex + 1} / {images.length}
      </Box> */}
      <img
        src={images[currentIndex]}
        alt={`${alt} - ${currentIndex + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.3s ease-in-out"
        }}
      />
      {/* Setas de navegação */}
      {showArrows && (
        <>
          <ActionIcon
            variant="filled"
            color="dark"
            size="sm"
            radius="xl"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            style={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "white",
              zIndex: 2
            }}
          >
            <IconChevronLeft size={16} />
          </ActionIcon>

          <ActionIcon
            variant="filled"
            color="dark"
            size="sm"
            radius="xl"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            style={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "white",
              zIndex: 2
            }}
          >
            <IconChevronRight size={16} />
          </ActionIcon>
        </>
      )}
      {/* Indicadores */}
      {showIndicators && (
        <Group
          justify="center"
          gap={4}
          style={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                goToImage(index);
              }}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor:
                  currentIndex === index ? "white" : "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
                border: "1px solid rgba(0, 0, 0, 0.2)"
              }}
            />
          ))}
        </Group>
      )}
      {/* Contador de imagens */}
      <Box
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: 500,
          zIndex: 2
        }}
      >
        {currentIndex + 1}/{images.length}
      </Box>
    </Box>
  );
}
