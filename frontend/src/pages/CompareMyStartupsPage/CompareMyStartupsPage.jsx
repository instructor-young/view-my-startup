import Page from "../../components/Page";
import { useCompareMyStartup } from "../../contexts/compareMyStartup.context";
import MyStartupSection from "./components/MyStartupSection";
import StartupsForComparision from "./components/StartupsForComparision";

function CompareMyStartupsPage() {
  const compareMyStartup = useCompareMyStartup();

  return (
    <Page>
      <MyStartupSection />
      {!!compareMyStartup.selectedCompaniesForComparision && (
        <StartupsForComparision />
      )}
    </Page>
  );
}

export default CompareMyStartupsPage;
