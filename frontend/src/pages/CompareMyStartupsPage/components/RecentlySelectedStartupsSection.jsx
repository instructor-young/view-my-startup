import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import StartupRow from "./StartupRow";

function RecentlySelectedStartupsSection({
  onClickStartupRow: handleClickStartupRow,
}) {
  const [recentlySelectedMyStartups, setRecentlySelectedMyStartups] = useState(
    []
  );

  useEffect(() => {
    setRecentlySelectedMyStartups(
      JSON.parse(localStorage.getItem("recentlySelectedMyStartups")) || []
    );
  }, []);

  if (recentlySelectedMyStartups?.length === 0) return null;

  return (
    <section>
      <h5 className="font-bold text-lg text-white mb-3">
        최근 선택된 기업 ({recentlySelectedMyStartups.length})
      </h5>

      <ul className="space-y-3">
        {recentlySelectedMyStartups.map((startup) => (
          <li key={startup.id}>
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
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RecentlySelectedStartupsSection;
