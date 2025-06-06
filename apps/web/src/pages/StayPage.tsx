import React, { useState } from "react";
import { GSTag } from "ui";
import { mockListings, type Listing } from "../data/listings";
import { useLanguage } from "../hooks";
import { Button, Card, Container, Grid, Icon } from "../components/ui";
import { EmptyState } from "../components/common/EmptyState";
import { PageLayout } from "../components/layout/PageLayout";

interface ListingCardProps {
  listing: Listing;
  onCardClick: (listing: Listing) => void;
  t: (key: string) => string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  listing,
  onCardClick,
  t
}) => {
  return (
    <Card hover className="flex flex-col h-full">
      {/* Image */}
      <div
        className="relative h-48 bg-cover bg-center rounded-t-lg cursor-pointer overflow-hidden"
        style={{ backgroundImage: `url(${listing.imageUrl})` }}
        onClick={() => onCardClick(listing)}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
          <div>
            <h3 className="text-white font-bold text-lg">{listing.title}</h3>
            <p className="text-gray-200 text-sm">{listing.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="flex items-center justify-between mb-3">
          <GSTag label={listing.neighborhood} variant="info" size="sm" />
          <span className="text-lg font-bold text-cop-green-600 dark:text-cop-green-400">
            {listing.currency}
            {listing.price}/{t("common.night")}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 dark:text-gray-300">
          {listing.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t("stay.upTo")} {listing.capacity} {t("common.person")}
          </span>

          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t("common.by")}
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {listing.host.name}
            </span>
            {listing.host.verified && (
              <GSTag label="✓" variant="success" size="sm" />
            )}
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1 mb-4">
          {listing.amenities.slice(0, 3).map((amenity, index) => (
            <GSTag key={index} label={amenity} variant="gray" size="sm" />
          ))}
          {listing.amenities.length > 3 && (
            <GSTag
              label={`+${listing.amenities.length - 3}`}
              variant="gray"
              size="sm"
            />
          )}
        </div>

        {/* Action Button */}
        <Button
          onClick={() => onCardClick(listing)}
          variant="primary"
          size="sm"
          className="w-full"
        >
          {t("common.viewDetails")}
        </Button>
      </div>
    </Card>
  );
};

export const StayPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredListings, setFilteredListings] =
    useState<Listing[]>(mockListings);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredListings(mockListings);
    } else {
      const filtered = mockListings.filter(
        (listing) =>
          listing.neighborhood.toLowerCase().includes(term.toLowerCase()) ||
          listing.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredListings(filtered);
    }
  };

  const handleCardClick = (listing: Listing) => {
    // Aqui implementaremos a navegação para detalhes ou modal
    console.log("Card clicked:", listing);
  };

  return (
    <PageLayout title={t("stay.title")} subtitle={t("stay.subtitle")}>
      <Container size="lg" className="py-8">
        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Icon
              name="search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            />
            <input
              type="text"
              placeholder={t("stay.searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cop-green-500 focus:border-transparent text-gray-900 text-base dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Results Count */}
        {searchTerm && (
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {filteredListings.length} {t("stay.resultCount")}
            </p>
          </div>
        )}

        {/* Listings Grid */}
        {filteredListings.length > 0 ? (
          <Grid
            cols={1}
            gap="lg"
            responsive={{
              md: 2,
              lg: 3
            }}
          >
            {filteredListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onCardClick={handleCardClick}
                t={t}
              />
            ))}
          </Grid>
        ) : (
          <div className="text-center py-12">
            <EmptyState
              icon="🏠"
              title={t("stay.noResults")}
              description="Tente buscar por outros termos ou remova os filtros"
            />
            <div className="mt-6">
              <Button onClick={() => handleSearch("")} variant="primary">
                {t("stay.viewAll")}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </PageLayout>
  );
};
