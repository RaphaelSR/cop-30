import { useLanguage } from "../hooks";
import { PageLayout } from "../components/layout/PageLayout";
import { EmptyState } from "../components/common/EmptyState";

const GuidesPage = () => {
  const { t } = useLanguage();

  return (
    <PageLayout title={t("guides.title")} subtitle={t("guides.subtitle")}>
      <EmptyState
        icon="👥"
        title={t("guides.comingSoon")}
        description={t("guides.description")}
      />
    </PageLayout>
  );
};

export default GuidesPage;
