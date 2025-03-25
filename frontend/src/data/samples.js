export const allStartUps = {
  columns: [
    {
      name: "ranking",
      label: "순위",
      flex: 2,
      formatter: (value) => `${value}위`,
    },
    {
      name: "name",
      label: "기업명",
      flex: 6,
      getHref: (row) => `/startup/${row.id}`,
    },
    {
      name: "description",
      label: "기업 소개",
      flex: 9,
      getHref: (row) => `/startup/${row.id}`,
    },
    { name: "category", label: "카테고리", flex: 5 },
    {
      name: "fund",
      label: "누적 투자 금액",
      flex: 5,
      formatter: (value) => `${value}억 원`,
    },
    {
      name: "sales",
      label: "매출액",
      flex: 5,
      formatter: (value) => `${value}억 원`,
    },
    {
      name: "employees",
      label: "고용 인원",
      flex: 5,
      formatter: (value) => `${value}명`,
    },
  ],
  rows: [
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fund: 10,
      sales: 28,
      employees: 68,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fund: 10,
      sales: 28,
      employees: 68,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fund: 10,
      sales: 28,
      employees: 68,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fund: 10,
      sales: 28,
      employees: 68,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fund: 10,
      sales: 28,
      employees: 68,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fund: 10,
      sales: 28,
      employees: 68,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fund: 10,
      sales: 28,
      employees: 68,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fund: 10,
      sales: 28,
      employees: 68,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fund: 10,
      sales: 28,
      employees: 68,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fund: 10,
      sales: 28,
      employees: 68,
    },
  ],
};

export const investments = {
  columns: [
    {
      name: "ranking",
      label: "순위",
      flex: 2,
      formatter: (value) => `${value}위`,
    },
    {
      name: "name",
      label: "기업명",
      flex: 6,
      getHref: (row) => `/startup/${row.id}`,
    },
    {
      name: "description",
      label: "기업 소개",
      flex: 9,
      getHref: (row) => `/startup/${row.id}`,
    },
    { name: "category", label: "카테고리", flex: 5 },
    {
      name: "fundSimulation",
      label: "View My Startup 투자 금액",
      flex: 5,
      formatter: (value) => `${value}억 원`,
    },
    {
      name: "fund",
      label: "실제 누적 투자 금액",
      flex: 5,
      formatter: (value) => `${value}억 원`,
    },
  ],
  rows: [
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fundSimulation: 100,
      fund: 10,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fundSimulation: 100,
      fund: 10,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fundSimulation: 100,
      fund: 10,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fundSimulation: 100,
      fund: 10,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fundSimulation: 100,
      fund: 10,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fundSimulation: 100,
      fund: 10,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fundSimulation: 100,
      fund: 10,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fundSimulation: 100,
      fund: 10,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fundSimulation: 100,
      fund: 10,
    },
    {
      id: 1,
      ranking: 1,
      name: "코드잇",
      description:
        "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
      category: "에듀테크",
      fundSimulation: 100,
      fund: 10,
    },
  ],
};
