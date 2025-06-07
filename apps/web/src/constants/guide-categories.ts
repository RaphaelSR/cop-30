export const GUIDE_CATEGORIES = [
  {
    id: "cultura",
    label: "Cultura",
    icon: "🎭"
  },
  {
    id: "natureza",
    label: "Natureza",
    icon: "🌿"
  },
  {
    id: "gastronomia",
    label: "Gastronomia",
    icon: "🍽️"
  },
  {
    id: "historia",
    label: "História",
    icon: "🏛️"
  },
  {
    id: "aventura",
    label: "Aventura",
    icon: "🏞️"
  },
  {
    id: "artesanato",
    label: "Artesanato",
    icon: "🎨"
  }
] as const;

export type GuideCategoryId = (typeof GUIDE_CATEGORIES)[number]["id"];

export function getCategoryIcon(categoryId: GuideCategoryId): string {
  const category = GUIDE_CATEGORIES.find((cat) => cat.id === categoryId);
  return category?.icon || "📍";
}

export function getCategoryLabel(categoryId: GuideCategoryId): string {
  const category = GUIDE_CATEGORIES.find((cat) => cat.id === categoryId);
  return category?.label || categoryId;
}
