import { TourGuide } from "../types/guides";

export const tourGuides: TourGuide[] = [
  {
    id: "1",
    name: "Prof. Michel Pinho",
    description:
      "Ex-secretário de cultura de Belém. Realiza passeios históricos gratuitos pela cidade antiga, compartilhando décadas de conhecimento sobre a rica história paraense.",
    languages: ["Português"],
    contact: "instagram.com/michelpinhooficial",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    schedule: {
      days: ["Sábado", "Domingo"],
      time: "09:00 - 12:00",
      location: "Cidade Velha - Ponto de encontro: Praça Dom Pedro II"
    },
    free: true,
    link: "https://www.instagram.com/michelpinhooficial/",
    category: "historical",
    rating: 4.9,
    verified: true
  },
  {
    id: "2",
    name: "Belém Cultural Tours",
    description:
      "Grupo de historiadores e guias locais especializados em tours culturais pela cidade. Oferece roteiros pela Cidade Velha, Mercado Ver-o-Peso e principais pontos históricos.",
    languages: ["Português", "Inglês", "Espanhol"],
    contact: "contato@belemculturaltours.com.br",
    photo:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=400&fit=crop&crop=faces",
    schedule: {
      days: ["Segunda a Domingo"],
      time: "08:00 - 17:00",
      location: "Cidade Velha e Centro Histórico"
    },
    free: false,
    link: "https://belemculturaltours.com.br",
    category: "cultural",
    rating: 4.7,
    verified: true
  },
  {
    id: "3",
    name: "Rota dos Sabores",
    description:
      "Tour gastronômico especializado nas feiras livres e restaurantes típicos do centro de Belém. Explore os sabores únicos da culinária amazônica com guias especializados.",
    languages: ["Português", "Inglês"],
    contact: "contato@rotadossabores.com",
    photo:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=face",
    schedule: {
      days: ["Terça", "Quinta", "Sábado"],
      time: "06:00 - 11:00",
      location: "Ver-o-Peso e Praça do Carmo"
    },
    free: false,
    link: "mailto:contato@rotadossabores.com",
    category: "gastronomic",
    rating: 4.8,
    verified: true
  },
  {
    id: "4",
    name: "Guia Juliana Tavares",
    description:
      "Especialista em história afro-amazônica com foco em turismo consciente e educativo. Oferece roteiros por áreas simbólicas do centro histórico de Belém.",
    languages: ["Português", "Inglês"],
    contact: "instagram.com/guiacopjuliana",
    photo:
      "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face",
    schedule: {
      days: ["Quarta", "Sexta", "Domingo"],
      time: "14:00 - 17:00",
      location: "Centro Histórico - Focos em locais de resistência cultural"
    },
    free: false,
    link: "https://instagram.com/guiacopjuliana",
    category: "cultural",
    rating: 4.9,
    verified: true
  },
  {
    id: "5",
    name: "Amazônia Aventura",
    description:
      "Guias especializados em ecoturismo e natureza urbana. Oferece passeios pelos parques e áreas verdes de Belém, conectando cidade e natureza amazônica.",
    languages: ["Português", "Inglês", "Francês"],
    contact: "(91) 98765-4321",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    schedule: {
      days: ["Segunda a Sexta"],
      time: "07:00 - 16:00",
      location: "Parque da Residência, Bosque Rodrigues Alves"
    },
    free: false,
    category: "nature",
    rating: 4.6,
    verified: true
  },
  {
    id: "6",
    name: "Caminhada Cultural Gratuita",
    description:
      "Iniciativa comunitária que oferece caminhadas culturais gratuitas todos os fins de semana. Voluntários locais compartilham histórias e curiosidades da cidade.",
    languages: ["Português"],
    contact: "(91) 99999-1234",
    photo:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    schedule: {
      days: ["Sábado", "Domingo"],
      time: "16:00 - 18:00",
      location: "Estação das Docas - Ponto de encontro: Entrada principal"
    },
    free: true,
    category: "cultural",
    rating: 4.5,
    verified: true
  },
  {
    id: "7",
    name: "João Silva - Guia Iniciante",
    description:
      "Novo guia local em formação, especializado em passeios pelos bairros residenciais e vida cotidiana de Belém. Oferece uma perspectiva autêntica da cidade.",
    languages: ["Português"],
    contact: "(91) 91234-5678",
    // photo: undefined, // Sem foto para testar fallback
    schedule: {
      days: ["Sábado"],
      time: "09:00 - 12:00",
      location: "Bairros residenciais - Nazaré e Umarizal"
    },
    free: true,
    category: "cultural",
    rating: 4.2,
    verified: false
  }
];

export const availableLanguages = [
  "Português",
  "Inglês",
  "Espanhol",
  "Francês"
];

export const categories = [
  { value: "all", label: "Todas as categorias" },
  { value: "cultural", label: "Cultural" },
  { value: "historical", label: "Histórico" },
  { value: "gastronomic", label: "Gastronômico" },
  { value: "nature", label: "Natureza" },
  { value: "general", label: "Geral" }
];
