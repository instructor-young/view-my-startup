import Page from "../../components/Page";
import { useCompareMyStartup } from "../../contexts/compareMyStartup.context";
import Comparision from "./components/Comparision";
import MyStartupSection from "./components/MyStartupSection";
import Rankings from "./components/Rankings";
import StartupsForComparision from "./components/StartupsForComparision";

function CompareMyStartupsPage() {
  const compareMyStartup = useCompareMyStartup();

  return (
    <Page>
      {/* 나의 기업 선택하기 */}
      <MyStartupSection />

      {/* 비교 기업 선택하기 */}
      {(!!compareMyStartup.selectedMyStartup ||
        (!compareMyStartup.selectedMyStartup &&
          compareMyStartup.selectedCompaniesForComparision)) &&
        !compareMyStartup.comparision && <StartupsForComparision />}

      {/* 비교 결과 */}
      {!!compareMyStartup.comparision && <Comparision />}

      {/* 기업 순위 확인하기 */}
      {!!compareMyStartup.comparision && <Rankings />}
    </Page>
  );
}

export default CompareMyStartupsPage;
