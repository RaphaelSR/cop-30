import { type Listing } from "../types/stay";

export const mockListings: Listing[] = [
  {
    id: "1",
    title: "Casa Aconchegante no Comércio",
    subtitle: "Quarto privativo em casa familiar no centro histórico",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"
    ],
    neighborhood: "centro",
    type: "room",
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
    neighborhood: "cidadeVelha",
    type: "apartment",
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
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1520637836862-4d197d17c295?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop"
    ],
    neighborhood: "ilhaDoCombu",
    type: "cabin",
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
  },
  {
    id: "4",
    title: "Casa Completa no Umarizal",
    subtitle: "Casa inteira próxima ao centro de convenções",
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
    neighborhood: "umarizal",
    type: "house",
    price: 200,
    currency: "R$",
    capacity: 6,
    amenities: ["WiFi", "Cozinha completa", "Churrasqueira", "Estacionamento"],
    host: {
      name: "Carlos Mendes",
      whatsapp: "+5591654321098",
      verified: false
    },
    description:
      "Casa espaçosa no bairro Umarizal, ideal para grupos. Próxima ao centro de convenções e Shopping Boulevard. Área de lazer com churrasqueira e estacionamento privativo.",
    location: {
      lat: -1.4481,
      lng: -48.479
    }
  },
  {
    id: "5",
    title: "Quarto Privativo na Nazaré",
    subtitle: "Acomodação simples e aconchegante",
    imageUrl:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=300&fit=crop",
    neighborhood: "nazare",
    type: "room",
    price: 60,
    currency: "R$",
    capacity: 2,
    amenities: ["WiFi", "Café da manhã", "Bicicleta"],
    host: {
      name: "Dona Raimunda",
      whatsapp: "+5591543210987",
      verified: true
    },
    description:
      "Quarto aconchegante na casa da Dona Raimunda, na Nazaré. Café da manhã regional incluído. Bicicleta disponível para passeios pelo bairro histórico.",
    location: {
      lat: -1.4503,
      lng: -48.4889
    }
  },
  {
    id: "6",
    title: "Loft Moderno Batista Campos",
    subtitle: "Estúdio contemporâneo em bairro nobre",
    imageUrl:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
    ],
    neighborhood: "batista",
    type: "apartment",
    price: 180,
    currency: "R$",
    capacity: 2,
    amenities: ["WiFi", "Ar condicionado", "Smart TV", "Cozinha gourmet"],
    host: {
      name: "Patricia Lima",
      whatsapp: "+5591432109876",
      verified: true
    },
    description:
      "Loft moderno no nobre bairro Batista Campos. Decoração contemporânea, cozinha gourmet e localização privilegiada próxima a restaurantes e vida noturna.",
    location: {
      lat: -1.4367,
      lng: -48.4889
    }
  },
  {
    id: "7",
    title: "Casa de Família nos Jurunas",
    subtitle: "Quarto compartilhado em ambiente familiar",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    neighborhood: "jurunas",
    type: "room",
    price: 45,
    currency: "R$",
    capacity: 1,
    amenities: ["WiFi", "Café da manhã", "Quintal", "Rede"],
    host: {
      name: "Seu Manoel",
      whatsapp: "+5591321098765",
      verified: true
    },
    description:
      "Quarto simples e acolhedor na casa do Seu Manoel nos Jurunas. Ambiente familiar autêntico, café da manhã paraense e quintal com rede para descanso.",
    location: {
      lat: -1.4834,
      lng: -48.4567
    }
  },
  {
    id: "8",
    title: "Apartamento Executivo Centro",
    subtitle: "Flat completo para executivos",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop"
    ],
    neighborhood: "centro",
    type: "apartment",
    price: 250,
    currency: "R$",
    capacity: 2,
    amenities: [
      "WiFi",
      "Ar condicionado",
      "Academia",
      "Piscina",
      "Estacionamento"
    ],
    host: {
      name: "Roberto Silva",
      whatsapp: "+5591210987654",
      verified: true
    },
    description:
      "Apartamento executivo no centro de Belém. Prédio com academia, piscina e estacionamento. Ideal para viajantes a negócios ou turistas que buscam conforto.",
    location: {
      lat: -1.4558,
      lng: -48.4902
    }
  },
  {
    id: "9",
    title: "Cabana Rústica Ilha do Combu",
    subtitle: "Imersão total na natureza amazônica",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1520637736862-4d197d17c295?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
    ],
    neighborhood: "ilhaDoCombu",
    type: "cabin",
    price: 95,
    currency: "R$",
    capacity: 3,
    amenities: [
      "Natureza",
      "Trilhas",
      "Observação de aves",
      "Refeições incluídas"
    ],
    host: {
      name: "Comunidade Ribeirinha",
      whatsapp: "+5591109876543",
      verified: true
    },
    description:
      "Cabana rústica gerenciada pela comunidade local. Experiência autêntica com trilhas na floresta, observação de aves e refeições com ingredientes da região.",
    location: {
      lat: -1.5298,
      lng: -48.4398
    }
  },
  {
    id: "10",
    title: "Studio Moderno Umarizal",
    subtitle: "Apto novo próximo ao shopping",
    imageUrl:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
    neighborhood: "umarizal",
    type: "apartment",
    price: 140,
    currency: "R$",
    capacity: 2,
    amenities: ["WiFi", "Smart TV", "Cozinha", "Lavanderia"],
    host: {
      name: "Amanda Costa",
      whatsapp: "+5591098765432",
      verified: false
    },
    description:
      "Studio recém reformado no Umarizal. Mobiliado com bom gosto, próximo ao Shopping Boulevard e com fácil acesso ao transporte público.",
    location: {
      lat: -1.4445,
      lng: -48.4756
    }
  },
  {
    id: "11",
    title: "Casa Colonial Cidade Velha",
    subtitle: "Patrimônio histórico restaurado",
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop"
    ],
    neighborhood: "cidadeVelha",
    type: "house",
    price: 320,
    currency: "R$",
    capacity: 8,
    amenities: [
      "WiFi",
      "Arquitetura histórica",
      "Terraço",
      "Cozinha completa",
      "Ar condicionado"
    ],
    host: {
      name: "Instituto Patrimônio",
      whatsapp: "+5591987654321",
      verified: true
    },
    description:
      "Casa colonial do século XVIII totalmente restaurada. Localizada no coração da Cidade Velha, oferece uma experiência única de hospedagem em patrimônio histórico.",
    location: {
      lat: -1.4612,
      lng: -48.5028
    }
  },
  {
    id: "12",
    title: "Quarto Aconchegante Nazaré",
    subtitle: "Em casa de artista local",
    imageUrl:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
    ],
    neighborhood: "nazare",
    type: "room",
    price: 75,
    currency: "R$",
    capacity: 2,
    amenities: [
      "WiFi",
      "Arte local",
      "Café da manhã",
      "Oficinas de artesanato"
    ],
    host: {
      name: "Mestra Nazaré",
      whatsapp: "+5591876543210",
      verified: true
    },
    description:
      "Quarto na casa da Mestra Nazaré, artista local especializada em cerâmica marajoara. Inclui oficinas de artesanato e café da manhã com tapioca fresca.",
    location: {
      lat: -1.4489,
      lng: -48.4867
    }
  },
  {
    id: "13",
    title: "Mansão Compartilhada Batista Campos",
    subtitle: "Quarto em mansão histórica",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    neighborhood: "batista",
    type: "room",
    price: 110,
    currency: "R$",
    capacity: 1,
    amenities: ["WiFi", "Jardim", "Biblioteca", "Piano", "Sala de estar"],
    host: {
      name: "Família Batista",
      whatsapp: "+5591765432109",
      verified: true
    },
    description:
      "Quarto em elegante mansão dos anos 1920 no Batista Campos. Ambiente refinado com jardim, biblioteca e piano. Perfeito para quem aprecia história e cultura.",
    location: {
      lat: -1.4356,
      lng: -48.4778
    }
  },
  {
    id: "14",
    title: "Flat Econômico Centro",
    subtitle: "Opção básica bem localizada",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    neighborhood: "centro",
    type: "apartment",
    price: 65,
    currency: "R$",
    capacity: 2,
    amenities: ["WiFi", "Cozinha básica", "Ventilador"],
    host: {
      name: "Pensão Central",
      whatsapp: "+5591654321098",
      verified: false
    },
    description:
      "Flat simples mas bem localizado no centro de Belém. Opção econômica para quem quer estar próximo aos pontos turísticos e transporte público.",
    location: {
      lat: -1.4567,
      lng: -48.4889
    }
  },
  {
    id: "15",
    title: "Casa de Pescador Jurunas",
    subtitle: "Vivência com família ribeirinha",
    imageUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    ],
    neighborhood: "jurunas",
    type: "room",
    price: 55,
    currency: "R$",
    capacity: 2,
    amenities: [
      "Pesca",
      "Café da manhã",
      "Passeio de canoa",
      "Histórias locais"
    ],
    host: {
      name: "Sr. Benedito",
      whatsapp: "+5591543210987",
      verified: true
    },
    description:
      "Quarto na casa do Sr. Benedito, pescador tradicional. Inclui passeio de canoa, pesca artesanal e histórias fascinantes sobre a vida ribeirinha em Belém.",
    location: {
      lat: -1.4812,
      lng: -48.4534
    }
  },
  {
    id: "16",
    title: "Penthouse Vista Panorâmica",
    subtitle: "Luxo com vista da cidade",
    imageUrl:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop"
    ],
    neighborhood: "umarizal",
    type: "apartment",
    price: 450,
    currency: "R$",
    capacity: 4,
    amenities: [
      "WiFi",
      "Vista panorâmica",
      "Jacuzzi",
      "Cozinha gourmet",
      "Serviço de limpeza"
    ],
    host: {
      name: "Luxury Stays Belém",
      whatsapp: "+5591432109876",
      verified: true
    },
    description:
      "Penthouse de luxo com vista panorâmica de Belém. Jacuzzi privativo, cozinha gourmet e serviço de limpeza diário. Para quem busca o máximo em conforto e sofisticação.",
    location: {
      lat: -1.4423,
      lng: -48.4734
    }
  },
  {
    id: "17",
    title: "Sobrado Familiar Nazaré",
    subtitle: "Casa inteira para grandes grupos",
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
    ],
    neighborhood: "nazare",
    type: "house",
    price: 280,
    currency: "R$",
    capacity: 10,
    amenities: [
      "WiFi",
      "Churrasqueira",
      "Quintal amplo",
      "4 quartos",
      "2 banheiros"
    ],
    host: {
      name: "Família Nazaré",
      whatsapp: "+5591321098765",
      verified: true
    },
    description:
      "Sobrado espaçoso ideal para grandes grupos ou famílias. Quintal amplo com churrasqueira, 4 quartos e localização privilegiada na Nazaré histórica.",
    location: {
      lat: -1.4501,
      lng: -48.4856
    }
  },
  {
    id: "18",
    title: "Loft Industrial Centro",
    subtitle: "Design moderno em prédio histórico",
    imageUrl:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
    neighborhood: "centro",
    type: "apartment",
    price: 190,
    currency: "R$",
    capacity: 3,
    amenities: ["WiFi", "Design industrial", "Cozinha integrada", "Mezzanino"],
    host: {
      name: "Arq. Helena Mendes",
      whatsapp: "+5591210987654",
      verified: true
    },
    description:
      "Loft com design industrial único, criado por arquiteta local. Localizado em prédio histórico renovado no centro, combina tradição e modernidade.",
    location: {
      lat: -1.4545,
      lng: -48.4923
    }
  },
  {
    id: "19",
    title: "Casa Ecológica Ilha do Combu",
    subtitle: "Sustentabilidade total",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1520637736862-4d197d17c295?w=400&h=300&fit=crop"
    ],
    neighborhood: "ilhaDoCombu",
    type: "house",
    price: 175,
    currency: "R$",
    capacity: 5,
    amenities: [
      "Energia solar",
      "Compostagem",
      "Horta orgânica",
      "Coleta de água da chuva"
    ],
    host: {
      name: "Projeto Combu Verde",
      whatsapp: "+5591109876543",
      verified: true
    },
    description:
      "Casa 100% sustentável na Ilha do Combu. Energia solar, horta orgânica, compostagem e sistemas de captação de água da chuva. Ideal para ecoturistas.",
    location: {
      lat: -1.5245,
      lng: -48.4412
    }
  },
  {
    id: "20",
    title: "Apartamento Estudantil Batista Campos",
    subtitle: "Simples e funcional",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    neighborhood: "batista",
    type: "apartment",
    price: 85,
    currency: "R$",
    capacity: 2,
    amenities: [
      "WiFi",
      "Mesa de estudos",
      "Cozinha",
      "Lavanderia compartilhada"
    ],
    host: {
      name: "Republic Student",
      whatsapp: "+5591098765432",
      verified: false
    },
    description:
      "Apartamento funcional no Batista Campos, ideal para estudantes ou viajantes jovens. Ambiente descontraído com mesa de estudos e cozinha equipada.",
    location: {
      lat: -1.4378,
      lng: -48.4801
    }
  },
  {
    id: "21",
    title: "Casa de Artesão Jurunas",
    subtitle: "Arte e cultura local",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"
    ],
    neighborhood: "jurunas",
    type: "room",
    price: 70,
    currency: "R$",
    capacity: 2,
    amenities: [
      "WiFi",
      "Oficinas de artesanato",
      "Galeria de arte",
      "Café da manhã"
    ],
    host: {
      name: "Mestre João Artesão",
      whatsapp: "+5591987654321",
      verified: true
    },
    description:
      "Quarto na casa-ateliê do Mestre João, artesão tradicional dos Jurunas. Inclui oficinas de artesanato em madeira e visita à galeria de arte local.",
    location: {
      lat: -1.4823,
      lng: -48.4589
    }
  }
];

export default mockListings;
