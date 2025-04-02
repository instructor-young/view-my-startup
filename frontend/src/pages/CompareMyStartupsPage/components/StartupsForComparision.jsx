import Button from "../../../components/Button";
import { useCompareMyStartup } from "../../../contexts/compareMyStartup.context";
import { useModal } from "../../../contexts/modal.context";
import SelectStartupsForComparisionModal from "./SelectStartupsForComparisionModal";
import StartupCard from "./StartupCard";

function StartupsForComparision() {
  const modal = useModal();
  const compareMyStartup = useCompareMyStartup();

  const handleClickAddStartup = () => {
    modal.open((close) => <SelectStartupsForComparisionModal close={close} />);
  };

  return (
    <div className="mt-10">
      <>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl text-white">
            어떤 기업이 궁금하세요?
          </h2>

          <Button
            disabled={
              compareMyStartup.selectedCompaniesForComparision?.length === 5
            }
            onClick={handleClickAddStartup}
          >
            기업 추가하기
          </Button>
        </div>
        <div className="mt-8 h-[300px] relative flex items-center justify-center bg-black-300 rounded-sm">
          {compareMyStartup.selectedCompaniesForComparision.length > 0 ? (
            <div className="flex items-center gap-x-4">
              {compareMyStartup.selectedCompaniesForComparision.map(
                (startup) => (
                  <StartupCard
                    key={startup.id}
                    startup={startup}
                    onClickDelete={() =>
                      compareMyStartup.removeCompanyForComparision(startup)
                    }
                  />
                )
              )}
            </div>
          ) : (
            <p className="text-gray-200 text-sm text-center">
              아직 추가한 기업이 없어요.
              <br />
              버튼을 눌러 기업을 추가해 보세요.
            </p>
          )}
        </div>

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
      </>
    </div>
  );
}

export default StartupsForComparision;
