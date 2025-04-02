import Button from "../../components/Button";
import Page from "../../components/Page";
import { useCompareMyStartup } from "../../contexts/compareMyStartup.context";
import { useModal } from "../../contexts/modal.context";
import NewInvestmentModal from "../StartupDetailPage/components/NewInvestmentModal";
import Comparision from "./components/Comparision";
import MyStartupSection from "./components/MyStartupSection";
import Rankings from "./components/Rankings";
import StartupsForComparision from "./components/StartupsForComparision";

function CompareMyStartupsPage() {
  const compareMyStartup = useCompareMyStartup();
  const modal = useModal();

  const handleClickInvestInMyStartup = () => {
    modal.open((close) => (
      <NewInvestmentModal
        startup={compareMyStartup.selectedMyStartup}
        close={close}
      />
    ));
  };

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

      <div>
        {compareMyStartup.comparision ? (
          <div className="mt-10 text-center">
            <Button size={"lg"} onClick={handleClickInvestInMyStartup}>
              나의 기업에 투자하기
            </Button>
          </div>
        ) : (
          <div className="mt-6 text-center">
            <Button
              size={"lg"}
              onClick={compareMyStartup.compare}
              disabled={
                !compareMyStartup.selectedMyStartup ||
                !compareMyStartup.selectedCompaniesForComparision ||
                compareMyStartup.selectedCompaniesForComparision.length === 0
              }
            >
              기업 비교하기
            </Button>
          </div>
        )}
      </div>
    </Page>
  );
}

export default CompareMyStartupsPage;
