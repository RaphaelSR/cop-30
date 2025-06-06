import { useLanguage } from "../hooks";
import { PageLayout } from "../components/layout/PageLayout";
import { EmptyState } from "../components/common/EmptyState";

const EventsPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout title={t("events.title")} subtitle={t("events.subtitle")}>
      <EmptyState
        icon="📅"
        title={t("events.comingSoon")}
        description={t("events.description")}
      />
    </PageLayout>
  );
};

export default EventsPage;
