import { useState } from "react";
import API from "../../../api/index.api";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import SearchInput from "../../../components/SearchInput";
import { useCompareMyStartup } from "../../../contexts/compareMyStartup.context";
import SearchResultSection from "./SearchResultSection";
import StartupRow from "./StartupRow";

function SelectMyStartupModal({ close }) {
  const [searchedStartups, setSearchedStartups] = useState([]);
  const compareMyStartup = useCompareMyStartup();

  const handleClickStartupRow = (startup) => () => {
    compareMyStartup.selectMyStartup(startup);
    API.companies.incrementPickAsMyStartup(startup.id);

    close();
  };

  const handleSearch = (keyword) => {
    API.companies
      .getCompanies(keyword)
      .then((companies) => setSearchedStartups(companies));
  };

  return (
    <Modal close={close}>
      <div className="space-y-6">
        <h3 className="py-1 font-bold text-xl text-white leading-none">
          나의 기업 선택하기
        </h3>

        <SearchInput onSearch={handleSearch} autoFocus />

        {/* <RecentlySelectedStartupsSection
          compareMyStartup={compareMyStartup}
          close={close}
        /> */}

        {searchedStartups.length > 0 && (
          <SearchResultSection
            title="검색 결과"
            startups={searchedStartups}
            renderRow={(startup) => (
              <StartupRow
                startup={startup}
                button={
                  <Button
                    onClick={handleClickStartupRow(startup)}
                    size={"lg"}
                    outline
                    intent={"primary"}
                    rounded={false}
                    className={"!px-4"}
                  >
                    선택하기
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

export default SelectMyStartupModal;
