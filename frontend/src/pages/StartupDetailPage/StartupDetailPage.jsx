import Page from "../../components/Page";
import IndexBox from "./components/IndexBox";

function StartupDetailPage() {
  return (
    <Page>
      {/* 헤더 */}
      <header className="flex space-x-5 items-center pb-8 border-b border-black-100">
        <div className="w-20 aspect-square bg-amber-200 rounded-full"></div>
        <div className="space-y-2">
          <h1 className="text-white font-bold text-2xl">코드잇</h1>
          <strong className="font-medium text-xl text-gray-200">
            에듀테크
          </strong>
        </div>
      </header>
      {/* 지표들 */}
      <div className="grid grid-cols-3 gap-x-6 mt-8">
        <IndexBox label="누적 투자 금액" value={"140억 원"} />
        <IndexBox label="누적 투자 금액" value={"140억 원"} />
        <IndexBox label="누적 투자 금액" value={"140억 원"} />
      </div>

      {/* 기업 소개 */}
      <div className="mt-8 p-6 bg-black-300 rounded-[10px]">
        <h2 className="font-semibold text-white mb-4">기업 소개</h2>
        <p className="whitespace-pre-wrap text-gray-100 text-sm">
          {`코드잇은 '온라인 코딩 교육 서비스'를 운영하는 EdTech 스타트업입니다.

코딩 교육과 데이터 사이언스 교육에 대한 수요는 급격히 늘어나고 있지만, 아직까지 좋은 교육 서비스를 찾기란 쉽지 않습니다. 이를 해결하고자 코드잇은 모든 강의를 자체 제작하여 퀄리티 높은 콘텐츠를 제공하고, 동시에 코딩 교육에 최적화된 플랫폼을 개발하고 있습니다.

모든 강의를 마음껏 들을 수 있는 "코드잇 무제한 멤버십"을 제공하고 있으며, 지난 5년 동안 21만 명의 수강생과 평균 만족도 4.9점이라는 국내 교육 업계에서 보기 드문 성과를 달성하였습니다. 또한 콘텐츠와 기술력을 인정받아 2021년 10월 Series B 투자를 받아 누적 140억 원의 투자를 받았고, 현재 40여 명의 팀원이 같은 목표를 향해 나아가고 있습니다.

“배움의 기쁨을 세상 모두에게.”

이것이 코드잇의 비전입니다. 현재는 최고의 코딩 교육 서비스를 국내에서 제공하고 있지만, 이보다 더 큰 그림을 그리고 있습니다. 2021년 상반기부터 영어권 시장 진출을 시작했고, 코딩과 인접한 분야부터 스펙트럼을 넓혀 나갈 계획입니다.`}
        </p>
      </div>
    </Page>
  );
}

export default StartupDetailPage;
