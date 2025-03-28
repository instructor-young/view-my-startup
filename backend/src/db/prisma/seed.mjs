import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const companies = [
  {
    name: "티오더",
    description:
      "티오더는 식음료 매장 내 테이블 주문 및 결제 시스템을 디지털화하여 고객의 편리성을 극대화하고 매장의 운영 효율성을 높이는 플랫폼을 제공합니다. QR코드를 통해 고객이 직접 주문을 진행할 수 있으며, 이는 인건비 절감 및 주문 오류 감소에 효과적입니다. 매장 관리자 입장에서는 실시간 매출 및 재고 관리가 가능하여 효율적인 매장 운영을 돕고 있으며, 특히 프랜차이즈 업계를 중심으로 큰 주목을 받고 있습니다.",
    category: "푸드테크",
    realInvestmentAmount: 431,
    revenue: 596,
    numberOfEmployees: 269,
  },
  {
    name: "케어링",
    description:
      "케어링은 빠르게 고령화되는 한국 사회에서 급증하는 시니어 케어 수요를 타겟으로, 맞춤형 돌봄 및 의료 서비스를 제공하는 플랫폼입니다. 노인 및 보호자들에게 온라인과 오프라인을 결합한 개인 맞춤형 케어 솔루션을 제공하며, 지역 내 의료기관 및 케어 전문가들과의 협업을 통해 차별화된 서비스를 제공합니다. 특히 돌봄 서비스의 질적 향상을 목표로 하며, 국내 고령층 시장의 중요한 플랫폼으로 자리 잡고 있습니다.",
    category: "컨슈머테크",
    realInvestmentAmount: 750,
    revenue: 555,
    numberOfEmployees: 90,
  },
  {
    name: "정육각",
    description:
      "정육각은 독자적인 유통 및 관리 시스템을 통해 생산자와 소비자를 직접 연결하여 초신선 식품을 공급하는 온라인 플랫폼입니다. 기존 유통 과정에서 발생하는 시간과 비용을 최소화하여 소비자에게 더욱 신선한 제품을 합리적인 가격에 제공합니다. 특히 신선도 유지가 중요한 축산물 및 해산물 분야에서 강력한 경쟁력을 보이며, 소비자 만족도 향상과 함께 지속적인 성장세를 유지하고 있습니다.",
    category: "푸드테크",
    realInvestmentAmount: 900,
    revenue: 0,
    numberOfEmployees: 0,
  },
  {
    name: "무브",
    description:
      "무브는 동남아시아를 중심으로 한국 패션 브랜드를 현지 소비자들에게 효율적으로 소개하고 판매하는 글로벌 커머스 스타트업입니다. 로컬라이징된 마케팅 전략과 현지 맞춤형 상품 기획을 통해 현지 시장에서 인기를 끌고 있으며, 특히 밀레니얼 세대와 Z세대 소비자를 타겟으로 활발한 마케팅 활동을 펼치고 있습니다. 다양한 국내 패션 브랜드들과의 협력을 통해 현지 패션 트렌드를 선도하는 플랫폼으로 성장하고 있습니다.",
    category: "이커머스",
    realInvestmentAmount: 200,
    revenue: 80,
    numberOfEmployees: 80,
  },
  {
    name: "아자스쿨",
    description:
      "아자스쿨은 초·중·고 학생들을 위한 맞춤형 온라인 학습 멘토링 플랫폼입니다. 개별 학생들의 학습 스타일과 학습 진도에 맞춰 개인화된 학습 코칭과 멘토링을 제공하며, 학생들이 자기주도 학습 능력을 키울 수 있도록 돕습니다. 또한, 학부모들이 자녀의 학습 현황을 실시간으로 파악할 수 있는 기능을 제공하여 가족 단위의 참여도를 높이고 있습니다. 교육 분야에서 혁신적인 서비스를 제공하여 학생들의 학습 성취도를 크게 향상시키고 있습니다.",
    category: "에듀테크",
    realInvestmentAmount: 50,
    revenue: 15,
    numberOfEmployees: 40,
  },
  {
    name: "오늘의집",
    description:
      "오늘의집은 인테리어 정보와 쇼핑을 결합한 플랫폼으로, 소비자들이 쉽고 간편하게 집꾸미기를 할 수 있도록 다양한 콘텐츠와 제품을 제공합니다. 사용자가 직접 올린 인테리어 사진과 리뷰를 기반으로 소비자들이 쉽게 제품을 선택하고 구매할 수 있도록 지원하며, 최근 온라인뿐만 아니라 오프라인 경험을 확장해가며 인테리어 시장에서 큰 영향력을 발휘하고 있습니다.",
    category: "라이프스타일",
    realInvestmentAmount: 2000,
    revenue: 600,
    numberOfEmployees: 300,
  },
  {
    name: "에이슬립",
    description:
      "에이슬립은 AI 기반 수면 분석 솔루션을 개발하여 개인의 수면 데이터를 분석하고 개선점을 제안하는 서비스를 제공합니다. 스마트워치나 웨어러블 기기를 통해 수집된 데이터를 기반으로 개인화된 수면 솔루션을 제공하며, 헬스케어 기업 및 병원과의 협업도 활발히 진행하고 있습니다.",
    category: "헬스케어",
    realInvestmentAmount: 741,
    revenue: 498,
    numberOfEmployees: 22,
  },
  {
    name: "트위니",
    description:
      "트위니는 자율주행 로봇 기술을 활용한 스마트 물류 솔루션을 개발하는 기업으로, 병원, 공장, 호텔 등의 공간에서 물류 이동 자동화를 통해 인건비를 절감하고 운영 효율성을 높이고 있습니다. 자체 개발한 물류 로봇은 다양한 환경에 맞춰 쉽게 적용 가능합니다.",
    category: "로보틱스",
    realInvestmentAmount: 316,
    revenue: 692,
    numberOfEmployees: 132,
  },
  {
    name: "해피문데이",
    description:
      "해피문데이는 여성용 위생용품 정기배송 서비스를 시작으로, 여성 건강 관리 전반으로 서비스를 확장하고 있는 스타트업입니다. 정기 배송 외에도 생리 주기 관리 앱, 건강 상담 등을 제공하며, 여성 건강을 위한 데이터 기반 맞춤 솔루션을 강화하고 있습니다.",
    category: "헬스케어",
    realInvestmentAmount: 1401,
    revenue: 127,
    numberOfEmployees: 111,
  },
  {
    name: "직토",
    description:
      "직토는 웨어러블 디바이스를 기반으로 건강 데이터를 수집하고, 이를 보험사와 연계하여 맞춤형 보험 상품을 설계하는 서비스를 제공합니다. 기술 기반의 헬스 인슈어테크 스타트업으로, 건강한 생활 습관을 유도하는 프로그램도 함께 운영하고 있습니다.",
    category: "인슈어테크",
    realInvestmentAmount: 1365,
    revenue: 422,
    numberOfEmployees: 270,
  },
  {
    name: "브레인커머스",
    description:
      "브레인커머스는 AI 기반 데이터 분석 솔루션을 제공하여 커머스 기업들이 실시간으로 트렌드를 분석하고 마케팅 전략을 최적화할 수 있도록 지원합니다. 다양한 데이터 포인트를 활용하여 상품 추천, 타겟 마케팅 등을 자동화합니다.",
    category: "AI",
    realInvestmentAmount: 401,
    revenue: 735,
    numberOfEmployees: 158,
  },
  {
    name: "에어클래스",
    description:
      "에어클래스는 전문가와 일반 사용자를 연결하는 온라인 라이브 클래스 플랫폼입니다. 다양한 주제의 실시간 강의가 가능하며, 실시간 질문 응답과 피드백 기능을 통해 쌍방향 학습을 강화하고 있습니다.",
    category: "에듀테크",
    realInvestmentAmount: 1038,
    revenue: 795,
    numberOfEmployees: 202,
  },
  {
    name: "크몽",
    description:
      "크몽은 프리랜서와 고객을 연결하는 온라인 재능 마켓 플랫폼으로, 디자인, 개발, 번역, 영상 등 다양한 분야의 전문가들이 자신의 서비스를 판매할 수 있도록 돕습니다. 프리랜서 경제의 활성화에 기여하고 있는 대표적인 플랫폼입니다.",
    category: "플랫폼",
    realInvestmentAmount: 546,
    revenue: 649,
    numberOfEmployees: 388,
  },
  {
    name: "채널코퍼레이션",
    description:
      "채널코퍼레이션은 고객 상담 채팅 솔루션 ‘채널톡’을 운영하며, 중소상공인을 대상으로 마케팅과 고객관리를 자동화하는 기능을 제공합니다. 웹사이트에 쉽게 연동 가능하고, 다양한 채널을 한 번에 통합 관리할 수 있는 점이 특징입니다.",
    category: "B2B SaaS",
    realInvestmentAmount: 697,
    revenue: 99,
    numberOfEmployees: 352,
  },
  {
    name: "센드버드",
    description:
      "센드버드는 채팅 API를 서비스하는 글로벌 SaaS 기업으로, 다양한 앱과 서비스에 채팅 기능을 손쉽게 통합할 수 있도록 지원합니다. 실시간 메시징, 알림, 채널 관리 기능 등을 제공하며, 전 세계 다양한 서비스에 채팅 기능을 빠르게 구현할 수 있게 합니다.",
    category: "B2B SaaS",
    realInvestmentAmount: 383,
    revenue: 374,
    numberOfEmployees: 401,
  },
  {
    name: "왓챠",
    description:
      "왓챠는 개인화된 영화, 드라마, 도서 추천 플랫폼으로 시작해 OTT 스트리밍 서비스까지 확장한 콘텐츠 기반 기술 기업입니다. 유저의 취향을 분석해 맞춤형 콘텐츠를 추천하는 알고리즘으로 차별화된 사용자 경험을 제공합니다.",
    category: "콘텐츠",
    realInvestmentAmount: 920,
    revenue: 208,
    numberOfEmployees: 379,
  },
  {
    name: "뮤직카우",
    description:
      "뮤직카우는 음악 저작권을 조각 투자할 수 있는 플랫폼을 운영하며, 팬과 투자자가 음악 저작권에 직접 참여할 수 있는 혁신적인 금융 서비스를 제공합니다. 음악 산업과 금융 산업을 연결하는 새로운 시장을 창출하고 있습니다.",
    category: "핀테크",
    realInvestmentAmount: 240,
    revenue: 308,
    numberOfEmployees: 472,
  },
  {
    name: "로앤컴퍼니",
    description:
      "로앤컴퍼니는 ‘로톡’이라는 법률 상담 플랫폼을 운영하며, 일반 사용자들이 쉽게 변호사와 연결될 수 있는 서비스를 제공합니다. 법률 서비스의 문턱을 낮추는 데 기여하고 있으며, 법률 정보 콘텐츠 또한 활발히 제공하고 있습니다.",
    category: "리걸테크",
    realInvestmentAmount: 728,
    revenue: 919,
    numberOfEmployees: 142,
  },
  {
    name: "베이글코드",
    description:
      "베이글코드는 글로벌 모바일 게임 시장을 타겟으로 하는 게임 개발사입니다. 특히 슬롯 게임 부문에서 큰 인기를 끌고 있으며, 미국과 유럽을 주요 시장으로 다양한 장르의 캐주얼 게임도 개발 중입니다.",
    category: "게임",
    realInvestmentAmount: 1274,
    revenue: 244,
    numberOfEmployees: 99,
  },
  {
    name: "팀그릿",
    description:
      "팀그릿은 병원과 의사 간의 채용을 연결하는 의료 인력 매칭 플랫폼으로, 정확한 데이터와 매칭 알고리즘을 통해 효율적인 채용을 돕습니다. 의료 현장의 인력 문제 해결에 기여하며, 병원과 인재 간의 연결을 디지털화합니다.",
    category: "헬스케어",
    realInvestmentAmount: 1117,
    revenue: 726,
    numberOfEmployees: 121,
  },
  {
    name: "몰로코",
    description:
      "몰로코는 모바일 광고 자동화 플랫폼을 제공하는 스타트업으로, 머신러닝 기반의 예측 모델을 활용하여 광고 수익을 극대화합니다. 구글, 페이스북 이외의 대안을 찾는 퍼블리셔들에게 인기를 끌고 있습니다.",
    category: "애드테크",
    realInvestmentAmount: 1169,
    revenue: 819,
    numberOfEmployees: 60,
  },
  {
    name: "코드잇",
    description:
      "코드잇은 누구나 쉽게 개발을 배울 수 있도록 돕는 온라인 코딩 교육 플랫폼입니다. 다양한 난이도의 커리큘럼과 실습 기반 학습 환경을 제공하며, 초보자도 실무 중심의 개발 능력을 기를 수 있도록 구성되어 있습니다.",
    category: "에듀테크",
    realInvestmentAmount: 724,
    revenue: 310,
    numberOfEmployees: 107,
  },
  {
    name: "아이디어스",
    description:
      "아이디어스는 핸드메이드 작가들의 온라인 마켓을 운영하며, 창작자들이 직접 만든 제품을 소비자에게 소개하고 판매할 수 있는 플랫폼을 제공합니다. 수공예, 공예품, 디자인 제품 등 창작 중심의 커머스를 지향합니다.",
    category: "이커머스",
    realInvestmentAmount: 910,
    revenue: 406,
    numberOfEmployees: 208,
  },
  {
    name: "리본즈",
    description:
      "리본즈는 명품 리세일 플랫폼으로, 정품 인증 시스템과 함께 프리미엄 중고 제품을 안전하게 사고팔 수 있도록 돕습니다. 고객 신뢰를 기반으로 고가 제품 거래를 활성화하고 있으며, 환경을 고려한 순환 소비 트렌드를 반영합니다.",
    category: "이커머스",
    realInvestmentAmount: 1457,
    revenue: 289,
    numberOfEmployees: 336,
  },
  {
    name: "리틀팍스",
    description:
      "리틀팍스는 어린이를 위한 영어 애니메이션 콘텐츠를 제작 및 제공하는 플랫폼입니다. 자체 제작한 이야기 기반의 학습 콘텐츠를 통해 아이들이 재미있게 영어를 익힐 수 있도록 돕고 있으며, 전 세계 유아 및 초등 영어 교육 시장에서 높은 평가를 받고 있습니다.",
    category: "에듀테크",
    realInvestmentAmount: 343,
    revenue: 549,
    numberOfEmployees: 426,
  },
  {
    name: "비플렉스",
    description:
      "비플렉스는 피트니스 센터, 필라테스, 요가 등의 운동 공간을 원하는 시간에 예약하고 이용할 수 있도록 도와주는 플랫폼입니다. 기존의 멤버십 기반이 아닌 시간제 이용 모델을 제공하며, 사용자 맞춤형 운동 습관 형성을 지원합니다.",
    category: "피트니스",
    realInvestmentAmount: 499,
    revenue: 188,
    numberOfEmployees: 438,
  },
  {
    name: "포켓메디슨",
    description:
      "포켓메디슨은 약국과 환자를 연결하는 모바일 플랫폼으로, 약 처방 정보 조회, 복약 알림, 건강 상담 등 환자의 약물 복용을 도와주는 다양한 서비스를 제공합니다. 사용자 편의성과 데이터 기반 건강 관리가 특징입니다.",
    category: "헬스케어",
    realInvestmentAmount: 890,
    revenue: 87,
    numberOfEmployees: 468,
  },
  {
    name: "위펀딩",
    description:
      "위펀딩은 부동산을 기반으로 한 P2P 금융 플랫폼으로, 개인 투자자들이 소액으로 부동산에 간접 투자할 수 있도록 돕습니다. 투자 상품의 안전성을 높이기 위한 자체 평가 시스템과 투명한 정보 공개가 강점입니다.",
    category: "핀테크",
    realInvestmentAmount: 963,
    revenue: 409,
    numberOfEmployees: 32,
  },
  {
    name: "올거나이즈",
    description:
      "올거나이즈는 AI 챗봇과 자연어 처리 기술을 기반으로 고객 문의 자동화 솔루션을 제공하는 기업입니다. 금융, 교육, 공공기관 등 다양한 분야에 맞춤형 챗봇 서비스를 구축하고 있으며, 업무 자동화에 기여하고 있습니다.",
    category: "AI",
    realInvestmentAmount: 1064,
    revenue: 656,
    numberOfEmployees: 473,
  },
  {
    name: "하이퍼커넥트",
    description:
      "하이퍼커넥트는 글로벌 영상 메신저 앱 ‘아자르’로 유명한 스타트업으로, WebRTC 기반의 실시간 통신 기술을 활용하여 다양한 커뮤니케이션 서비스를 개발하고 있습니다. AI 기반 실시간 얼굴 변환, 번역 기능도 보유하고 있습니다.",
    category: "커뮤니케이션",
    realInvestmentAmount: 609,
    revenue: 757,
    numberOfEmployees: 327,
  },
  {
    name: "플라잉캣",
    description:
      "플라잉캣은 이모티콘 기반 콘텐츠 제작 및 유통 플랫폼을 운영하는 기업으로, 카카오톡과 라인 등에 이모티콘을 공급하며 작가들과의 협업을 통해 다양한 캐릭터 IP를 보유하고 있습니다.",
    category: "콘텐츠",
    realInvestmentAmount: 1238,
    revenue: 371,
    numberOfEmployees: 461,
  },
  {
    name: "로민",
    description:
      "로민은 문서 자동화를 위한 OCR 인공지능 솔루션을 개발하는 스타트업으로, 병원 진료비 청구서, 세금계산서 등 다양한 문서를 자동으로 판독하고 처리할 수 있도록 지원합니다.",
    category: "AI",
    realInvestmentAmount: 1166,
    revenue: 967,
    numberOfEmployees: 228,
  },
  {
    name: "이음소시어스",
    description:
      "이음소시어스는 비즈니스 네트워킹 앱 ‘이음’으로 출발하여, 현재는 경력직 중심의 구인구직 플랫폼으로 확장하고 있습니다. 기업과 구직자 간 연결을 넘어 기업 브랜딩, 인재 관리 솔루션도 제공합니다.",
    category: "HR테크",
    realInvestmentAmount: 674,
    revenue: 555,
    numberOfEmployees: 58,
  },
  {
    name: "리디북스",
    description:
      "리디북스는 전자책 시장을 선도하는 플랫폼으로, 다양한 장르의 도서 콘텐츠를 모바일과 웹을 통해 제공합니다. 정기 구독 서비스와 오리지널 콘텐츠 제작에도 집중하며 콘텐츠 플랫폼으로의 입지를 강화하고 있습니다.",
    category: "콘텐츠",
    realInvestmentAmount: 162,
    revenue: 635,
    numberOfEmployees: 366,
  },
  {
    name: "퍼블리",
    description:
      "퍼블리는 직장인을 위한 실무 중심 콘텐츠 구독 서비스를 운영하는 플랫폼으로, 실무자의 경험을 바탕으로 작성된 콘텐츠를 통해 업무 역량을 향상시키고 커리어 성장을 지원합니다.",
    category: "에듀테크",
    realInvestmentAmount: 908,
    revenue: 108,
    numberOfEmployees: 19,
  },
  {
    name: "마이리얼트립",
    description:
      "마이리얼트립은 전 세계 자유 여행자와 현지 가이드를 연결해주는 여행 플랫폼으로, 투어 예약, 항공권, 숙소 등 다양한 여행 서비스를 통합 제공하고 있습니다. 자체 가이드 시스템과 사용자 후기 기반의 신뢰도 높은 콘텐츠가 강점입니다.",
    category: "여행",
    realInvestmentAmount: 1237,
    revenue: 906,
    numberOfEmployees: 99,
  },
  {
    name: "헬로웹",
    description:
      "헬로웹은 소상공인을 위한 간편 홈페이지 제작 플랫폼을 제공합니다. 비개발자도 쉽게 웹사이트를 만들 수 있도록 템플릿 기반의 직관적인 인터페이스를 제공하며, 마케팅 도구도 함께 제공합니다.",
    category: "웹서비스",
    realInvestmentAmount: 443,
    revenue: 867,
    numberOfEmployees: 364,
  },
  {
    name: "스마트러닝코리아",
    description:
      "스마트러닝코리아는 초중고 및 성인 학습자를 위한 스마트러닝 플랫폼을 운영합니다. AI 튜터 기능을 통해 학습자의 약점을 분석하고 맞춤형 콘텐츠를 제공하며, 공교육 및 사교육 시장에서 모두 활용되고 있습니다.",
    category: "에듀테크",
    realInvestmentAmount: 902,
    revenue: 406,
    numberOfEmployees: 75,
  },
  {
    name: "이스트몹",
    description:
      "이스트몹은 보안 클라우드 서비스 ‘센드애니웨어’를 제공하는 기업으로, 개인 및 기업 사용자를 위한 간편하고 안전한 파일 전송 솔루션을 제공합니다. 글로벌 사용자 기반을 확보하고 있습니다.",
    category: "보안/클라우드",
    realInvestmentAmount: 1500,
    revenue: 392,
    numberOfEmployees: 201,
  },
  {
    name: "루나랩",
    description:
      "루나랩은 디지털 헬스케어 스타트업으로, 여성 건강을 중심으로 생리주기, 호르몬 주기 관리 서비스를 제공합니다. 데이터 기반 분석을 통해 사용자 맞춤 솔루션을 제공하고 있으며, 글로벌 시장 확장을 추진 중입니다.",
    category: "헬스케어",
    realInvestmentAmount: 995,
    revenue: 455,
    numberOfEmployees: 16,
  },
  {
    name: "카랑",
    description:
      "카랑은 운전자와 차량 관리자를 위한 차량 정비 정보, 보험, 주유소 할인 정보 등을 통합 제공하는 앱 기반 플랫폼입니다. 차량 진단 및 주행 습관 데이터를 기반으로 한 맞춤형 정보 추천이 특징입니다.",
    category: "모빌리티",
    realInvestmentAmount: 1458,
    revenue: 531,
    numberOfEmployees: 202,
  },
  {
    name: "플랫가든",
    description:
      "플랫가든은 기업을 위한 ESG(환경·사회·지배구조) 데이터 관리 및 분석 솔루션을 제공하는 스타트업으로, 지속 가능 경영을 위한 보고서 작성과 지표 관리를 자동화합니다.",
    category: "B2B SaaS",
    realInvestmentAmount: 1332,
    revenue: 442,
    numberOfEmployees: 297,
  },
  {
    name: "트립비토즈",
    description:
      "트립비토즈는 AI 기반 여행 리뷰 분석을 통해 맞춤형 여행지를 추천해주는 여행 플랫폼입니다. 사용자 리뷰와 평점을 자연어 처리하여 개인 취향에 맞는 장소를 제안합니다.",
    category: "여행",
    realInvestmentAmount: 265,
    revenue: 937,
    numberOfEmployees: 227,
  },
  {
    name: "웨인힐스벤처스",
    description:
      "웨인힐스벤처스는 텍스트 기반 콘텐츠를 자동으로 음성과 영상 콘텐츠로 변환하는 기술을 개발하고 있으며, 미디어 자동화 시장에서 주목받고 있습니다. 기업 브랜딩 영상 자동 생성 솔루션이 주력입니다.",
    category: "AI",
    realInvestmentAmount: 418,
    revenue: 764,
    numberOfEmployees: 33,
  },
];

async function main() {
  await prisma.company.createMany({
    data: companies,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
