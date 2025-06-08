import { MantineProvider, createTheme } from "@mantine/core";
import { useTheme } from "@/hooks/useTheme";

interface MantineThemeProviderProps {
  children: React.ReactNode;
}

export const MantineThemeProvider: React.FC<MantineThemeProviderProps> = ({
  children
}) => {
  const { theme: currentTheme } = useTheme();

  const theme = createTheme({
    primaryColor: "cop-green",
    colors: {
      "cop-green": [
        "#f0fdf4",
        "#dcfce7",
        "#bbf7d0",
        "#86efac",
        "#4ade80",
        "#22c55e",
        "#16a34a",
        "#15803d",
        "#166534",
        "#14532d"
      ],
      "cop-purple": [
        "#faf5ff",
        "#f3e8ff",
        "#e9d5ff",
        "#d8b4fe",
        "#c084fc",
        "#a855f7",
        "#9333ea",
        "#7c3aed",
        "#6b21a8",
        "#581c87"
      ],
      // Cores escuras otimizadas para o tema dark
      dark: [
        "#C1C2C5",
        "#A6A7AB",
        "#909296",
        "#5c5f66",
        "#373A40",
        "#2C2E33",
        "#25262b",
        "#1A1B1E",
        "#141517",
        "#101113"
      ]
    },
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    headings: {
      fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    },
    breakpoints: {
      xs: "30em", // 480px
      sm: "40em", // 640px - Tailwind sm
      md: "48em", // 768px - Tailwind md
      lg: "64em", // 1024px - Tailwind lg
      xl: "80em" // 1280px - Tailwind xl
    },
    // Configurações globais que garantem consistência
    other: {
      // Variáveis CSS para sincronização com Tailwind
      lightBackground: "#ffffff",
      darkBackground: "#1a1b1e",
      lightSurface: "#f8f9fa",
      darkSurface: "#25262b"
    }
  });

  return (
    <MantineProvider theme={theme} forceColorScheme={currentTheme}>
      {children}
    </MantineProvider>
  );
};
