export interface Translation {
  // Navigation
  nav: {
    home: string;
    stay: string;
    guides: string;
    events: string;
    explore: string;
  };

  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    findAccommodation: string;
    findGuides: string;
  };

  // Features
  features: {
    authenticStay: {
      title: string;
      description: string;
    };
    localGuides: {
      title: string;
      description: string;
    };
    socialImpact: {
      title: string;
      description: string;
    };
  };

  // Quick Access
  quickAccess: {
    title: string;
    accommodation: string;
    guides: string;
    events: string;
    explore: string;
  };

  // Stay Page
  stay: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    resultCount: string;
    resultsCount: string;
    upTo: string;
    noResults: string;
    viewAll: string;
    filters: {
      search: string;
      neighborhood: string;
      type: string;
      priceRange: string;
      capacity: string;
      verifiedHost: string;
      showFilters: string;
      hideFilters: string;
      clear: string;
      allNeighborhoods: string;
      allTypes: string;
      allPrices: string;
      minCapacity: string;
    };
    priceRanges: {
      budget: string;
      mid: string;
      premium: string;
    };
    details: {
      perNight: string;
      capacity: string;
      people: string;
      host: string;
      verified: string;
      contactHost: string;
      sendMessage: string;
      amenities: string;
      about: string;
      location: string;
      contactVia: string;
    };
    view: {
      list: string;
      map: string;
      switchToList: string;
      switchToMap: string;
    };
    map: {
      loading: string;
      error: string;
      fallbackTitle: string;
      fallbackDescription: string;
    };
  };

  // Guides Page
  guides: {
    title: string;
    subtitle: string;
    constructionMessage: string;
    searchPlaceholder: string;
    resultsCount: string;
    filters: {
      search: string;
      languages: string;
      categories: string;
      onlyFree: string;
      showFilters: string;
      hideFilters: string;
      clear: string;
    };
    categories: {
      cultural: string;
      gastronomic: string;
      nature: string;
      historical: string;
      adventure: string;
    };
    details: {
      rating: string;
      verified: string;
      free: string;
      contact: string;
      schedule: string;
      languages: string;
      category: string;
      viewOnMap: string;
      contactVia: string;
    };
    statistics: {
      totalGuides: string;
      categories: string;
      averageRating: string;
    };
  };

  // Events Page
  events: {
    title: string;
    subtitle: string;
    constructionMessage: string;
  };

  // Explore Page
  explore: {
    title: string;
    subtitle: string;
    constructionMessage: string;
  };

  // Common
  common: {
    loading: string;
    error: string;
    tryAgain: string;
    close: string;
    cancel: string;
    confirm: string;
    save: string;
    edit: string;
    delete: string;
    remove: string;
    back: string;
    next: string;
    previous: string;
    search: string;
    filter: string;
    sort: string;
    clear: string;
    apply: string;
    viewMore: string;
    viewLess: string;
    comingSoon: string;
    underConstruction: string;
    viewDetails: string;
    about: string;
    pricing: string;
    noResults: string;
    night: string;
    by: string;
    person: string;
  };

  // Listings
  listings: {
    neighborhoods: {
      centro: string;
      cidadeVelha: string;
      ilhaDoCombu: string;
      jurunas: string;
      nazare: string;
      umarizal: string;
      batista: string;
    };
    types: {
      house: string;
      apartment: string;
      cabin: string;
      room: string;
    };
  };

  // Theme
  theme: {
    light: string;
    dark: string;
    toggle: string;
  };

  // Language
  language: {
    portuguese: string;
    english: string;
    spanish: string;
    change: string;
  };
}
