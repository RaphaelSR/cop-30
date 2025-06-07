import { GuideCategoryId } from "../constants";

export type TourGuide = {
  id: string;
  name: string;
  description: string;
  languages: string[];
  contact: string;
  photo?: string; // Tornando opcional para permitir fallback
  schedule: {
    days: string[];
    time: string;
    location: string;
  };
  free: boolean;
  link?: string;
  category: GuideCategoryId;
  rating?: number;
  verified: boolean;
  // Propriedades adicionais que estão sendo usadas nos componentes
  specialties?: string[];
  location?: string;
  availability?: string;
  priceRange?: string;
};

export type GuideFilters = {
  languages: string[];
  free?: boolean;
  category?: string | null;
  search?: string;
};
