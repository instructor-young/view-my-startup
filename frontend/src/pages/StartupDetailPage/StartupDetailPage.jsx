import { useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "../../api/index.api";
import Page from "../../components/Page";
import FundsOnViewMyStartup from "./components/FundsOnViewMyStartup";
import IndexBox from "./components/IndexBox";

function StartupDetailPage() {
  const { startupId: companyId } = useParams();
  const [startup, setStartUp] = useState(null);

  useEffect(() => {
    API.companies.getCompany(companyId).then(setStartUp);
  }, [companyId]);

  const refetchStartup = () => {
    API.companies.getCompany(companyId).then(setStartUp);
  };

  if (!startup) return null;

  return (
    <Page>
      {/* 헤더 */}
      <section className="flex space-x-5 items-center pb-8 border-b border-black-100">
        <div className="w-20 aspect-square bg-amber-200 rounded-full"></div>
        <div className="space-y-2">
          <h1 className="text-white font-bold text-2xl">{startup.name}</h1>
          <strong className="font-medium text-xl text-gray-200">
            {startup.category}
          </strong>
        </div>
      </section>

      {/* 지표들 */}
      <section className="grid grid-cols-3 gap-x-6 mt-8">
        <IndexBox
          label="누적 투자 금액"
          value={`${startup.realInvestmentAmount}억 원`}
        />
        <IndexBox label="매출액" value={`${startup.revenue}억 원`} />
        <IndexBox label="고용 인원" value={`${startup.numberOfEmployees}명`} />
      </section>

      {/* 기업 소개 */}
      <section className="mt-8 p-6 bg-black-300 rounded-[10px]">
        <h2 className="font-semibold text-white mb-4">기업 소개</h2>
        <p className="whitespace-pre-wrap text-gray-100 text-sm">
          {startup.description}
        </p>
      </section>

      {/* View My Startup에서 받은 투자 */}
      <FundsOnViewMyStartup
        startup={startup}
        onInvestSuccess={refetchStartup}
      />
    </Page>
  );
}

export default StartupDetailPage;
