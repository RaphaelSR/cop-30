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
    upTo: string;
    noResults: string;
    viewAll: string;
  };

  // Guides Page
  guides: {
    title: string;
    subtitle: string;
    constructionMessage: string;
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
    save: string;
    edit: string;
    remove: string;
    back: string;
    g;
    filter: string;
    sort: string;
    clear: string;
    apply: string;
    viewMore: string;
    viewLess: string;
    comingSoon: string;
    underConstruction: string;
    viewDetails: string;
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
