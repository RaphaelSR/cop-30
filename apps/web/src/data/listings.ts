export interface Listing {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
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
}

export const mockListings: Listing[] = [
  {
    id: "1",
    title: "Casa Aconchegante no Comércio",
    subtitle: "Quarto privativo em casa familiar no centro histórico",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    neighborhood: "Comércio",
    price: 80,
    currency: "R$",
    capacity: 2,
    amenities: ["WiFi", "Café da manhã", "Ar condicionado"],
    host: {
      name: "Maria Santos",
      whatsapp: "+5591987654321",
      verified: true
    },
    description:
      "Quarto confortável em casa no centro histórico de Belém. Próximo aos principais pontos turísticos, mercados e restaurantes típicos. A família oferece café da manhã com produtos regionais.",
    location: {
      lat: -1.4558,
      lng: -48.4902
    }
  },
  {
    id: "2",
    title: "Apartamento Vista Rio",
    subtitle: "Estúdio completo com vista para o Rio Guamá",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    neighborhood: "Cidade Velha",
    price: 120,
    currency: "R$",
    capacity: 3,
    amenities: ["WiFi", "Cozinha", "Vista para o rio", "Varanda"],
    host: {
      name: "João Ribeiro",
      whatsapp: "+5591876543210",
      verified: true
    },
    description:
      "Apartamento moderno com vista deslumbrante para o Rio Guamá. Localizado na Cidade Velha, patrimônio histórico de Belém. Cozinha equipada e varanda para relaxar.",
    location: {
      lat: -1.4619,
      lng: -48.5055
    }
  },
  {
    id: "3",
    title: "Chalé Ecológico na Ilha",
    subtitle: "Experiência única em palafita sustentável",
    imageUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    neighborhood: "Ilha do Combu",
    price: 150,
    currency: "R$",
    capacity: 4,
    amenities: ["Natureza", "Café da manhã", "Passeio de barco", "WiFi"],
    host: {
      name: "Ana Kalapalo",
      whatsapp: "+5591765432109",
      verified: true
    },
    description:
      "Chalé sustentável na Ilha do Combu, rodeado pela natureza amazônica. Inclui passeio de barco, café da manhã com produtos locais e vivência com a comunidade ribeirinha.",
    location: {
      lat: -1.5234,
      lng: -48.4456
    }
  }
];
