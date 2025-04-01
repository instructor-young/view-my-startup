import { useEffect, useRef, useState } from "react";
import API from "../../../api/index.api";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import SearchInput from "../../../components/SearchInput";
import { useCompareMyStartup } from "../../../contexts/compareMyStartup.context";
import SearchResultSection from "./SearchResultSection";
import StartupRow from "./StartupRow";

function SelectStartupsForComparisionModal({ close }) {
  const compareMyStartup = useCompareMyStartup();
  const [searchedStartups, setSearchedStartups] = useState([]);
  const [pickedStartups, setPickedStartups] = useState(
    compareMyStartup.selectedCompaniesForComparision || []
  );
  const pickedStartupsRef = useRef();

  const handleSearch = (keyword) => {
    API.companies
      .getCompanies(keyword)
      .then((companies) => setSearchedStartups(companies));
  };

  const checkIsSelected = (startup) =>
    pickedStartups.some((pickedStartup) => pickedStartup.id === startup.id);

  const handleClickSelect = (startup) => () => {
    if (pickedStartups.length === 5) return;

    setPickedStartups((prev) => [...prev, startup]);
  };

  const handleClickDeselect = (startup) => () => {
    setPickedStartups((prev) =>
      prev.filter((prevStartup) => prevStartup.id !== startup.id)
    );
  };

  useEffect(() => {
    pickedStartupsRef.current = pickedStartups;
  }, [pickedStartups]);

  useEffect(() => {
    return () => {
      compareMyStartup.setSelectedCompaniesForComparision(
        pickedStartupsRef.current
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal close={close}>
      <div className="space-y-6">
        <h3 className="py-1 font-bold text-xl text-white leading-none">
          비교할 기업 선택하기
        </h3>

        <SearchInput onSearch={handleSearch} />

        {pickedStartups.length > 0 && (
          <SearchResultSection
            title="선택한 기업"
            startups={pickedStartups}
            renderRow={(startup) => (
              <StartupRow
                startup={startup}
                button={
                  <Button
                    onClick={handleClickDeselect(startup)}
                    size={"lg"}
                    outline
                    intent={"dark"}
                    rounded={false}
                    className={"!px-4"}
                  >
                    선택해제
                  </Button>
                }
              />
            )}
          />
        )}

        {searchedStartups.length > 0 && (
          <SearchResultSection
            title="검색 결과"
            startups={searchedStartups}
            renderRow={(startup) => (
              <StartupRow
                startup={startup}
                button={
                  <Button
                    onClick={handleClickSelect(startup)}
                    size={"lg"}
                    outline
                    intent={checkIsSelected(startup) ? "secondary" : "primary"}
                    rounded={false}
                    className={"!px-4"}
                    disabled={checkIsSelected(startup)}
                  >
                    {checkIsSelected(startup) ? "선택완료" : "선택하기"}
                  </Button>
                }
              />
            )}
          />
        )}
      </div>
    </Modal>
  );
}

export default SelectStartupsForComparisionModal;
