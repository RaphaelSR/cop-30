import React from "react";
import { GSSectionHeader } from "ui";
import { useLanguage } from "../hooks";
import { Container, Grid, Card, Button } from "../components/ui";
import { FeatureCard } from "../components/features/FeatureCard";
import { QuickAccessItem } from "../components/features/QuickAccessItem";

export const LandingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cop-green-50 to-cop-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <Container className="py-16">
        <div className="text-center max-w-4xl mx-auto">
          <GSSectionHeader
            title={t("hero.title")}
            subtitle={t("hero.subtitle")}
            align="center"
            className="mb-12"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              to="/stay"
              variant="primary"
              size="lg"
              className="shadow-lg"
            >
              {t("hero.findAccommodation")}
            </Button>
            <Button
              to="/guides"
              variant="outline"
              size="lg"
              className="shadow-lg"
            >
              {t("hero.findGuides")}
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <Grid cols={1} responsive={{ md: 3 }} gap="lg" className="mb-16">
          <FeatureCard
            icon="🏠"
            title={t("features.authenticStay.title")}
            description={t("features.authenticStay.description")}
            iconBgColor="bg-cop-green-100 dark:bg-cop-green-900"
          />

          <FeatureCard
            icon="🗣️"
            title={t("features.localGuides.title")}
            description={t("features.localGuides.description")}
            iconBgColor="bg-cop-purple-100 dark:bg-cop-purple-900"
          />

          <FeatureCard
            icon="🌱"
            title={t("features.socialImpact.title")}
            description={t("features.socialImpact.description")}
            iconBgColor="bg-cop-green-100 dark:bg-cop-green-900"
          />
        </Grid>

        {/* Quick Access */}
        <Card padding="lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
            {t("quickAccess.title")}
          </h2>
          <Grid cols={2} responsive={{ md: 4 }} gap="md">
            <QuickAccessItem
              to="/stay"
              icon="🏠"
              label={t("quickAccess.accommodation")}
            />
            <QuickAccessItem
              to="/guides"
              icon="🗣️"
              label={t("quickAccess.guides")}
            />
            <QuickAccessItem
              to="/events"
              icon="📅"
              label={t("quickAccess.events")}
            />
            <QuickAccessItem
              to="/explore"
              icon="🗺️"
              label={t("quickAccess.explore")}
            />
          </Grid>
        </Card>
      </Container>
    </div>
  );
};
