import { useLanguage } from "../hooks";
import { PageLayout } from "../components/layout/PageLayout";
import { EmptyState } from "../components/common/EmptyState";

const ExplorePage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout title={t("explore.title")} subtitle={t("explore.subtitle")}>
      <EmptyState
        icon="🗺️"
        title={t("explore.comingSoon")}
        description={t("explore.description")}
      />
    </PageLayout>
  );
};

export default ExplorePage;
