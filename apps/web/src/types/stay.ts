export interface StayFilters {
  search: string;
  neighborhood: string | null;
  type: string[];
  priceRange: [number, number];
  capacity: number;
  verifiedHost: boolean;
}

export interface Listing {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  images?: string[]; // Array de múltiplas imagens para carrossel
  neighborhood: string;
  price: number;
  currency: string;
  capacity: number;
  amenities: string[];
  host: {
    name: string;
    whatsapp: string;
    verified: boolean;
  };
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  type: string; // house, apartment, cabin, room
}
