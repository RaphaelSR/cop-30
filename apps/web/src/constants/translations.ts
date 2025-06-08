export type Language = "pt" | "en";

export interface LanguageInfo {
  code: Language;
  name: string;
  flag: string;
  nativeName: string;
}

export type TranslationKeys = {
  [key: string]: string | TranslationKeys;
};

export const localTranslations: Record<Language, TranslationKeys> = {
  pt: {
    nav: {
      home: "Home",
      events: "Eventos",
      explore: "Explorar",
      guides: "Guias",
      stay: "Hospedagem"
    },
    hero: {
      title: "Experimente Belém",
      subtitle: "Autenticamente",
      description:
        "Conecte-se com a cultura local, descubra lugares únicos e tenha experiências autênticas durante a COP 30 em Belém do Pará.",
      exploreButton: "Explorar Experiências",
      stayButton: "Encontrar Hospedagem",
      findAccommodation: "Encontrar Hospedagem",
      findGuides: "Encontrar Guias"
    },
    events: {
      title: "Eventos",
      subtitle: "Descubra eventos locais e experiências únicas",
      comingSoon: "Em Breve",
      description: "Eventos locais especiais durante a COP 30 em Belém."
    },
    explore: {
      title: "Explorar",
      subtitle: "Descubra experiências autênticas em Belém",
      comingSoon: "Em Breve",
      description:
        "Experiências locais únicas para conhecer a verdadeira cultura de Belém."
    },
    guides: {
      title: "Guias",
      subtitle: "Conecte-se com guias locais especializados",
      comingSoon: "Em Breve",
      description:
        "Encontre guias locais experientes para sua experiência na COP 30."
    },
    stay: {
      title: "Hospedagem",
      subtitle: "Encontre acomodações autênticas com famílias locais",
      searchPlaceholder: "Buscar por bairro, tipo...",
      resultCount: "resultado encontrado",
      resultsCount: "resultados encontrados",
      upTo: "Até",
      noResults: "Nenhum resultado encontrado para",
      viewAll: "Ver Todos",
      about: "Sobre esta hospedagem",
      hostDetails: "Informações do anfitrião",
      amenities: "Comodidades",
      contactInfo: "Contato",
      contactHost: "Entrar em contato",
      perNight: "por noite",
      verified: "Verificado",
      guests: "hóspedes",
      filters: {
        showFilters: "Mostrar filtros",
        hideFilters: "Ocultar filtros",
        clear: "Limpar filtros",
        apply: "Aplicar filtros",
        priceRange: "Faixa de preço",
        capacity: "Capacidade",
        neighborhood: "Bairro",
        type: "Tipo de hospedagem",
        verifiedHost: "Anfitrião verificado",
        minPrice: "Preço mínimo",
        maxPrice: "Preço máximo",
        allNeighborhoods: "Todos os bairros",
        allTypes: "Todos os tipos"
      },
      types: {
        house: "Casa",
        apartment: "Apartamento",
        cabin: "Cabana",
        room: "Quarto"
      },
      neighborhoods: {
        centro: "Centro",
        cidadeVelha: "Cidade Velha",
        ilhaDoCombu: "Ilha do Combu",
        nazare: "Nazaré",
        umarizal: "Umarizal",
        batista: "Batista Campos",
        jurunas: "Jurunas"
      }
    },
    features: {
      authenticStay: {
        title: "Hospedagem Autêntica",
        description:
          "Fique com famílias locais e viva a verdadeira cultura paraense."
      },
      localGuides: {
        title: "Guias Locais",
        description:
          "Conecte-se com guias especializados que conhecem cada cantinho de Belém."
      },
      socialImpact: {
        title: "Impacto Social",
        description:
          "Contribua diretamente para a economia local e comunidades tradicionais."
      }
    },
    quickAccess: {
      title: "Acesso Rápido",
      accommodation: "Hospedagem",
      guides: "Guias",
      events: "Eventos",
      explore: "Explorar"
    },
    theme: {
      toggle: "Alterar tema"
    },
    language: {
      change: "Alterar idioma"
    },
    common: {
      language: "Idioma",
      languages: "Idiomas",
      portuguese: "Português",
      english: "Inglês",
      person: "pessoa(s)",
      by: "por",
      viewDetails: "Ver Detalhes",
      night: "noite"
    }
  },
  en: {
    nav: {
      home: "Home",
      events: "Events",
      explore: "Explore",
      guides: "Guides",
      stay: "Stay"
    },
    hero: {
      title: "Experience Belém",
      subtitle: "Authentically",
      description:
        "Connect with local culture, discover unique places and have authentic experiences during COP 30 in Belém, Pará.",
      exploreButton: "Explore Experiences",
      stayButton: "Find Accommodation",
      findAccommodation: "Find Accommodation",
      findGuides: "Find Guides"
    },
    events: {
      title: "Events",
      subtitle: "Discover local events and unique experiences",
      comingSoon: "Coming Soon",
      description: "Special local events during COP 30 in Belém."
    },
    explore: {
      title: "Explore",
      subtitle: "Discover authentic experiences in Belém",
      comingSoon: "Coming Soon",
      description: "Unique local experiences to know the true culture of Belém."
    },
    guides: {
      title: "Guides",
      subtitle: "Connect with specialized local guides",
      comingSoon: "Coming Soon",
      description: "Find experienced local guides for your COP 30 experience."
    },
    stay: {
      title: "Stay",
      subtitle: "Find authentic accommodations with local families",
      searchPlaceholder: "Search by neighborhood, type...",
      resultCount: "result found",
      resultsCount: "results found",
      upTo: "Up to",
      noResults: "No results found for",
      viewAll: "View All",
      about: "About this accommodation",
      hostDetails: "Host information",
      amenities: "Amenities",
      contactInfo: "Contact",
      contactHost: "Contact host",
      perNight: "per night",
      verified: "Verified",
      guests: "guests",
      filters: {
        showFilters: "Show filters",
        hideFilters: "Hide filters",
        clear: "Clear filters",
        apply: "Apply filters",
        priceRange: "Price range",
        capacity: "Capacity",
        neighborhood: "Neighborhood",
        type: "Accommodation type",
        verifiedHost: "Verified host",
        minPrice: "Minimum price",
        maxPrice: "Maximum price",
        allNeighborhoods: "All neighborhoods",
        allTypes: "All types"
      },
      types: {
        house: "House",
        apartment: "Apartment",
        cabin: "Cabin",
        room: "Room"
      },
      neighborhoods: {
        centro: "Downtown",
        cidadeVelha: "Old City",
        ilhaDoCombu: "Combu Island",
        nazare: "Nazaré",
        umarizal: "Umarizal",
        batista: "Batista Campos",
        jurunas: "Jurunas"
      }
    },
    features: {
      authenticStay: {
        title: "Authentic Stay",
        description: "Stay with local families and live the true Pará culture."
      },
      localGuides: {
        title: "Local Guides",
        description:
          "Connect with specialized guides who know every corner of Belém."
      },
      socialImpact: {
        title: "Social Impact",
        description:
          "Contribute directly to the local economy and traditional communities."
      }
    },
    quickAccess: {
      title: "Quick Access",
      accommodation: "Accommodation",
      guides: "Guides",
      events: "Events",
      explore: "Explore"
    },
    theme: {
      toggle: "Toggle theme"
    },
    language: {
      change: "Change language"
    },
    common: {
      language: "Language",
      languages: "Languages",
      portuguese: "Portuguese",
      english: "English",
      person: "person(s)",
      by: "by",
      viewDetails: "View Details",
      night: "night"
    }
  }
};

export const languages: LanguageInfo[] = [
  {
    code: "pt",
    name: "Português",
    flag: "🇧🇷",
    nativeName: "Português"
  },
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
    nativeName: "English"
  }
];
