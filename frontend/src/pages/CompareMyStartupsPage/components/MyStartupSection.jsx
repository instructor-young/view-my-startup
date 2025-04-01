import { useSearchParams } from "react-router";
import PlusButtonIcon from "../../../assets/icon/ic_plus_btn.png";
import RestartIcon from "../../../assets/icon/ic_restart.png";
import Button from "../../../components/Button";
import { useCompareMyStartup } from "../../../contexts/compareMyStartup.context";
import { useModal } from "../../../contexts/modal.context";
import SelectMyStartupModal from "./SelectMyStartupModal";
import StartupCard from "./StartupCard";

function MyStartupSection() {
  const modal = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  const compareMyStartup = useCompareMyStartup();
  const selectedMyStartup = compareMyStartup.selectedMyStartup;
  const selectedCompaniesForComparision =
    compareMyStartup.selectedCompaniesForComparision;

  const onClickSelectMyStartup = () => {
    modal.open(
      (close) => <SelectMyStartupModal close={close} />,
      () => {
        searchParams.delete("query");
        setSearchParams(searchParams);
      }
    );
  };

  const onClickRemoveMyStartup = () => {
    compareMyStartup.removeMyStartup();
  };

  const handleClickReset = () => {
    compareMyStartup.reset();
  };

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl text-white">
          나의 기업을 선택해 주세요!
        </h2>

        {selectedMyStartup &&
          selectedCompaniesForComparision &&
          selectedCompaniesForComparision.length > 0 && (
            <Button
              className="flex items-center gap-x-1"
              onClick={handleClickReset}
            >
              <img src={RestartIcon} className="size-6" />
              <span>전체 초기화</span>
            </Button>
          )}
      </div>

      <div className="mt-8 h-[300px] relative flex items-center justify-center bg-black-300 rounded-sm">
        {selectedMyStartup ? (
          <>
            <StartupCard startup={selectedMyStartup} />
            <button
              onClick={onClickRemoveMyStartup}
              className="absolute right-4 top-4 text-gray-100 underline"
            >
              선택 취소
            </button>
          </>
        ) : (
          <button
            onClick={onClickSelectMyStartup}
            className="flex flex-col items-center justify-center space-y-4 cursor-pointer hover:brightness-90 transition active:brightness-75"
          >
            <img src={PlusButtonIcon} />
            <span className="text-white font-medium text-lg">기업 추가</span>
          </button>
        )}
      </div>
    </section>
  );
}

export default MyStartupSection;
