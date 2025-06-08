import type { Translation } from "./types";

export const translations: Record<string, Translation> = {
  pt: {
    nav: {
      home: "Início",
      stay: "Hospedagem",
      guides: "Guias",
      events: "Eventos",
      explore: "Explorar"
    },
    hero: {
      title: "COP30 Belém Hub",
      subtitle:
        "Conectando visitantes e moradores para uma experiência autêntica da Amazônia durante a COP 30",
      findAccommodation: "Encontrar Hospedagem",
      findGuides: "Buscar Guias"
    },
    features: {
      authenticStay: {
        title: "Hospedagens Autênticas",
        description:
          "Fique com famílias locais e viva a verdadeira cultura amazônica"
      },
      localGuides: {
        title: "Guias Locais",
        description:
          "Conecte-se com tradutores e guias que conhecem cada canto de Belém"
      },
      socialImpact: {
        title: "Impacto Social",
        description:
          "Contribua para a economia local e promova o turismo sustentável"
      }
    },
    quickAccess: {
      title: "Acesso Rápido",
      accommodation: "Hospedagens",
      guides: "Guias",
      events: "Agenda",
      explore: "Explorar"
    },
    stay: {
      title: "Hospedagens Alternativas",
      subtitle:
        "Encontre estadias autênticas com famílias locais durante a COP 30",
      searchPlaceholder: "Buscar por bairro, tipo ou host...",
      resultCount: "hospedagem encontrada",
      resultsCount: "hospedagens encontradas",
      upTo: "Até",
      noResults: 'Nenhuma hospedagem encontrada para "{searchTerm}"',
      viewAll: "Ver todas as hospedagens",
      filters: {
        search: "Buscar",
        neighborhood: "Bairro",
        type: "Tipo",
        priceRange: "Faixa de preço",
        capacity: "Capacidade",
        verifiedHost: "Host verificado",
        showFilters: "Mostrar filtros",
        hideFilters: "Ocultar filtros",
        clear: "Limpar filtros",
        allNeighborhoods: "Todos os bairros",
        allTypes: "Todos os tipos",
        allPrices: "Todas as faixas",
        minCapacity: "Mín. pessoas"
      },
      priceRanges: {
        budget: "Econômico (até R$ 80)",
        mid: "Intermediário (R$ 80-150)",
        premium: "Premium (R$ 150+)"
      },
      details: {
        perNight: "por noite",
        capacity: "Capacidade",
        people: "pessoas",
        host: "Anfitriã",
        verified: "Verificado",
        contactHost: "Contatar anfitriã",
        sendMessage: "Enviar mensagem",
        amenities: "Comodidades",
        about: "Sobre",
        location: "Localização",
        contactVia: "Entrar em contato via"
      },
      view: {
        list: "Ver lista",
        map: "Ver no mapa",
        switchToList: "Voltar para lista",
        switchToMap: "Ver no mapa"
      },
      map: {
        loading: "Carregando mapa...",
        error: "Erro ao carregar o mapa",
        fallbackTitle: "Hospedagens por Localização",
        fallbackDescription: "Visualização alternativa organizada por bairros"
      }
    },
    guides: {
      title: "Guias e Tradutores",
      subtitle:
        "Conecte-se com guias locais especializados em turismo sustentável e tradutores certificados para uma experiência autêntica em Belém",
      constructionMessage:
        "Estamos trabalhando para trazer os melhores guias e tradutores de Belém",
      searchPlaceholder: "Buscar por nome ou especialidade...",
      resultsCount: "guias encontrados",
      filters: {
        search: "Buscar",
        languages: "Idiomas",
        categories: "Categorias",
        onlyFree: "Apenas gratuitos",
        showFilters: "Mostrar filtros",
        hideFilters: "Ocultar filtros",
        clear: "Limpar filtros"
      },
      categories: {
        cultural: "Cultural",
        gastronomic: "Gastronômico",
        nature: "Natureza",
        historical: "Histórico",
        adventure: "Aventura"
      },
      details: {
        rating: "Avaliação",
        verified: "Verificado",
        free: "Gratuito",
        contact: "Contato",
        schedule: "Horário",
        languages: "Idiomas",
        category: "Categoria",
        viewOnMap: "Ver no mapa",
        contactVia: "Entrar em contato via"
      },
      statistics: {
        totalGuides: "Total de Guias",
        categories: "Categorias",
        averageRating: "Avaliação Média"
      }
    },
    events: {
      title: "Agenda de Eventos",
      subtitle:
        "Descubra eventos locais, workshops, palestras e atividades relacionadas à COP30 e cultura paraense",
      constructionMessage:
        "Em breve você encontrará aqui toda a programação de eventos da COP30"
    },
    explore: {
      title: "Explore Belém",
      subtitle:
        "Descubra pontos turísticos, comércios locais, restaurantes e experiências autênticas da capital paraense",
      constructionMessage:
        "Estamos mapeando os melhores lugares para você explorar em Belém"
    },
    common: {
      loading: "Carregando...",
      error: "Erro",
      tryAgain: "Tentar Novamente",
      close: "Fechar",
      cancel: "Cancelar",
      confirm: "Confirmar",
      save: "Salvar",
      edit: "Editar",
      delete: "Excluir",
      remove: "Excluir",
      back: "Voltar",
      next: "Próximo",
      previous: "Anterior",
      search: "Buscar",
      filter: "Filtrar",
      sort: "Ordenar",
      clear: "Limpar",
      apply: "Aplicar",
      viewMore: "Ver Mais",
      viewLess: "Ver Menos",
      comingSoon: "Em breve",
      underConstruction: "Em construção",
      viewDetails: "Detalhes",
      about: "Sobre",
      pricing: "Preços",
      noResults: "Nenhum resultado encontrado",
      night: "noite",
      by: "Por",
      person: "pessoa"
    },
    listings: {
      neighborhoods: {
        centro: "Centro",
        cidadeVelha: "Cidade Velha",
        ilhaDoCombu: "Ilha do Combu",
        jurunas: "Jurunas",
        nazare: "Nazaré",
        umarizal: "Umarizal",
        batista: "Batista Campos"
      },
      types: {
        house: "Casa",
        apartment: "Apartamento",
        cabin: "Cabana",
        room: "Quarto"
      }
    },
    theme: {
      light: "Claro",
      dark: "Escuro",
      toggle: "Alternar tema"
    },
    language: {
      portuguese: "Português",
      english: "English",
      spanish: "Español",
      change: "Alterar idioma"
    }
  },
  en: {
    nav: {
      home: "Home",
      stay: "Stay",
      guides: "Guides",
      events: "Events",
      explore: "Explore"
    },
    hero: {
      title: "COP30 Belém Hub",
      subtitle:
        "Connecting visitors and locals for an authentic Amazon experience during COP 30",
      findAccommodation: "Find Accommodation",
      findGuides: "Find Guides"
    },
    features: {
      authenticStay: {
        title: "Authentic Accommodations",
        description:
          "Stay with local families and experience true Amazonian culture"
      },
      localGuides: {
        title: "Local Guides",
        description:
          "Connect with translators and guides who know every corner of Belém"
      },
      socialImpact: {
        title: "Social Impact",
        description:
          "Contribute to the local economy and promote sustainable tourism"
      }
    },
    quickAccess: {
      title: "Quick Access",
      accommodation: "Accommodations",
      guides: "Guides",
      events: "Events",
      explore: "Explore"
    },
    stay: {
      title: "Alternative Accommodations",
      subtitle: "Find authentic stays with local families during COP 30",
      searchPlaceholder: "Search by neighborhood, type or host...",
      resultCount: "accommodation found",
      resultsCount: "accommodations found",
      upTo: "Up to",
      noResults: 'No accommodations found for "{searchTerm}"',
      viewAll: "View all accommodations",
      filters: {
        search: "Search",
        neighborhood: "Neighborhood",
        type: "Type",
        priceRange: "Price range",
        capacity: "Capacity",
        verifiedHost: "Verified host",
        showFilters: "Show filters",
        hideFilters: "Hide filters",
        clear: "Clear filters",
        allNeighborhoods: "All neighborhoods",
        allTypes: "All types",
        allPrices: "All price ranges",
        minCapacity: "Min. people"
      },
      priceRanges: {
        budget: "Budget (up to $80)",
        mid: "Mid-range ($80-150)",
        premium: "Premium ($150+)"
      },
      details: {
        perNight: "per night",
        capacity: "Capacity",
        people: "people",
        host: "Host",
        verified: "Verified",
        contactHost: "Contact host",
        sendMessage: "Send message",
        amenities: "Amenities",
        about: "About",
        location: "Location",
        contactVia: "Contact via"
      },
      view: {
        list: "List",
        map: "Map",
        switchToList: "Switch to List",
        switchToMap: "Switch to Map"
      },
      map: {
        loading: "Loading map...",
        error: "Error loading map",
        fallbackTitle: "Accommodations by Location",
        fallbackDescription: "Alternative view organized by neighborhoods"
      }
    },
    guides: {
      title: "Guides & Translators",
      subtitle:
        "Connect with local guides specialized in sustainable tourism and certified translators for an authentic experience in Belém",
      constructionMessage:
        "We are working to bring you the best guides and translators from Belém",
      searchPlaceholder: "Search guides, experiences or locations...",
      resultsCount: "{{count}} guide(s) found",
      filters: {
        search: "Search",
        languages: "Languages",
        categories: "Categories",
        onlyFree: "Free only",
        showFilters: "Show filters",
        hideFilters: "Hide filters",
        clear: "Clear all"
      },
      categories: {
        cultural: "Cultural",
        gastronomic: "Gastronomic",
        nature: "Nature",
        historical: "Historical",
        adventure: "Adventure"
      },
      details: {
        rating: "Rating",
        verified: "Verified",
        free: "Free",
        contact: "Contact",
        schedule: "Schedule",
        languages: "Languages",
        category: "Category",
        viewOnMap: "View on map",
        contactVia: "Contact via"
      },
      statistics: {
        totalGuides: "Total Guides",
        categories: "Categories",
        averageRating: "Average Rating"
      }
    },
    events: {
      title: "Events Schedule",
      subtitle:
        "Discover local events, workshops, lectures and activities related to COP30 and Pará culture",
      constructionMessage:
        "Soon you will find here the complete COP30 events schedule"
    },
    explore: {
      title: "Explore Belém",
      subtitle:
        "Discover tourist spots, local shops, restaurants and authentic experiences in the capital of Pará",
      constructionMessage:
        "We are mapping the best places for you to explore in Belém"
    },
    common: {
      loading: "Loading...",
      error: "Error",
      tryAgain: "Try Again",
      close: "Close",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      remove: "Remove",
      back: "Back",
      next: "Next",
      previous: "Previous",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      clear: "Clear",
      apply: "Apply",
      viewMore: "View More",
      viewLess: "View Less",
      comingSoon: "Coming Soon",
      underConstruction: "Under Construction",
      viewDetails: "Details",
      about: "About",
      pricing: "Pricing",
      noResults: "No results found",
      night: "night",
      by: "By",
      person: "person"
    },
    listings: {
      neighborhoods: {
        centro: "Centro",
        cidadeVelha: "Cidade Velha",
        ilhaDoCombu: "Ilha do Combu",
        jurunas: "Jurunas",
        nazare: "Nazaré",
        umarizal: "Umarizal",
        batista: "Batista Campos"
      },
      types: {
        house: "House",
        apartment: "Apartment",
        cabin: "Cabin",
        room: "Room"
      }
    },
    theme: {
      light: "Light",
      dark: "Dark",
      toggle: "Toggle theme"
    },
    language: {
      portuguese: "Português",
      english: "English",
      spanish: "Español",
      change: "Change language"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      stay: "Alojamiento",
      guides: "Guías",
      events: "Eventos",
      explore: "Explorar"
    },
    hero: {
      title: "COP30 Belém Hub",
      subtitle:
        "Conectando visitantes y locales para una experiencia auténtica amazónica durante la COP 30",
      findAccommodation: "Encontrar Alojamiento",
      findGuides: "Buscar Guías"
    },
    features: {
      authenticStay: {
        title: "Alojamientos Auténticos",
        description:
          "Quédate con familias locales y vive la verdadera cultura amazónica"
      },
      localGuides: {
        title: "Guías Locales",
        description:
          "Conéctate con traductores y guías que conocen cada rincón de Belém"
      },
      socialImpact: {
        title: "Impacto Social",
        description:
          "Contribuye a la economía local y promueve el turismo sostenible"
      }
    },
    quickAccess: {
      title: "Acceso Rápido",
      accommodation: "Alojamientos",
      guides: "Guías",
      events: "Eventos",
      explore: "Explorar"
    },
    stay: {
      title: "Alojamientos Alternativos",
      subtitle:
        "Encuentra estadías auténticas con familias locales durante la COP 30",
      searchPlaceholder: "Buscar por barrio, tipo o anfitrión...",
      resultCount: "alojamiento encontrado",
      resultsCount: "alojamientos encontrados",
      upTo: "Hasta",
      noResults: 'No se encontraron alojamientos para "{searchTerm}"',
      viewAll: "Ver todos los alojamientos",
      filters: {
        search: "Buscar",
        neighborhood: "Barrio",
        type: "Tipo",
        priceRange: "Rango de precio",
        capacity: "Capacidad",
        verifiedHost: "Anfitrión verificado",
        showFilters: "Mostrar filtros",
        hideFilters: "Ocultar filtros",
        clear: "Limpiar filtros",
        allNeighborhoods: "Todos los barrios",
        allTypes: "Todos los tipos",
        allPrices: "Todos los rangos",
        minCapacity: "Mín. personas"
      },
      priceRanges: {
        budget: "Económico (hasta $80)",
        mid: "Intermedio ($80-150)",
        premium: "Premium ($150+)"
      },
      details: {
        perNight: "por noche",
        capacity: "Capacidad",
        people: "personas",
        host: "Anfitrión",
        verified: "Verificado",
        contactHost: "Contactar anfitrión",
        sendMessage: "Enviar mensaje",
        amenities: "Comodidades",
        about: "Acerca de",
        location: "Ubicación",
        contactVia: "Contactar vía"
      },
      view: {
        list: "Lista",
        map: "Mapa",
        switchToList: "Cambiar a Lista",
        switchToMap: "Cambiar a Mapa"
      },
      map: {
        loading: "Cargando mapa...",
        error: "Error al cargar el mapa",
        fallbackTitle: "Alojamientos por Ubicación",
        fallbackDescription: "Vista alternativa organizada por barrios"
      }
    },
    guides: {
      title: "Guías y Traductores",
      subtitle:
        "Conéctate con guías locales especializados en turismo sostenible y traductores certificados para una experiencia auténtica en Belém",
      constructionMessage:
        "Estamos trabajando para traerte los mejores guías y traductores de Belém",
      searchPlaceholder: "Buscar guías, experiencias o ubicaciones...",
      resultsCount: "{{count}} guía(s) encontrado(s)",
      filters: {
        search: "Buscar",
        languages: "Idiomas",
        categories: "Categorías",
        onlyFree: "Solo gratuitos",
        showFilters: "Mostrar filtros",
        hideFilters: "Ocultar filtros",
        clear: "Limpiar todo"
      },
      categories: {
        cultural: "Cultural",
        gastronomic: "Gastronómico",
        nature: "Naturaleza",
        historical: "Histórico",
        adventure: "Aventura"
      },
      details: {
        rating: "Calificación",
        verified: "Verificado",
        free: "Gratuito",
        contact: "Contacto",
        schedule: "Horario",
        languages: "Idiomas",
        category: "Categoría",
        viewOnMap: "Ver en el mapa",
        contactVia: "Contactar vía"
      },
      statistics: {
        totalGuides: "Total de Guías",
        categories: "Categorías",
        averageRating: "Calificación Promedio"
      }
    },
    events: {
      title: "Agenda de Eventos",
      subtitle:
        "Descubre eventos locales, talleres, conferencias y actividades relacionadas con la COP30 y la cultura de Pará",
      constructionMessage:
        "Pronto encontrarás aquí toda la programación de eventos de la COP30"
    },
    explore: {
      title: "Explora Belém",
      subtitle:
        "Descubre puntos turísticos, comercios locales, restaurantes y experiencias auténticas de la capital de Pará",
      constructionMessage:
        "Estamos mapeando los mejores lugares para que explores en Belém"
    },
    common: {
      loading: "Cargando...",
      error: "Error",
      tryAgain: "Intentar de Nuevo",
      close: "Cerrar",
      cancel: "Cancelar",
      confirm: "Confirmar",
      save: "Guardar",
      edit: "Editar",
      delete: "Eliminar",
      remove: "Eliminar",
      back: "Atrás",
      next: "Siguiente",
      previous: "Anterior",
      search: "Buscar",
      filter: "Filtrar",
      sort: "Ordenar",
      clear: "Limpiar",
      apply: "Aplicar",
      viewMore: "Ver Más",
      viewLess: "Ver Menos",
      comingSoon: "Próximamente",
      underConstruction: "En construcción",
      viewDetails: "Detalles",
      about: "Acerca de",
      pricing: "Precios",
      noResults: "No se encontraron resultados",
      night: "noche",
      by: "Por",
      person: "persona"
    },
    listings: {
      neighborhoods: {
        centro: "Centro",
        cidadeVelha: "Cidade Velha",
        ilhaDoCombu: "Ilha do Combu",
        jurunas: "Jurunas",
        nazare: "Nazaré",
        umarizal: "Umarizal",
        batista: "Batista Campos"
      },
      types: {
        house: "Casa",
        apartment: "Apartamento",
        cabin: "Cabaña",
        room: "Habitación"
      }
    },
    theme: {
      light: "Claro",
      dark: "Oscuro",
      toggle: "Cambiar tema"
    },
    language: {
      portuguese: "Português",
      english: "English",
      spanish: "Español",
      change: "Cambiar idioma"
    }
  }
};
