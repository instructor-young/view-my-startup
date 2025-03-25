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
      renderCell: (row, column) => (
        <div className="flex items-center gap-x-3">
          <div className="w-8 h-8 bg-amber-200 rounded-full" />
          {row[column.name]}
        </div>
      ),
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
      renderCell: (row, column) => (
        <div className="flex items-center gap-x-3">
          <div className="w-8 h-8 bg-amber-200 rounded-full" />
          {row[column.name]}
        </div>
      ),
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

export const startupDetail = {
  column: [
    {
      name: "investorName",
      label: "투자자 이름",
      flex: 1,
    },
    {
      name: "ranking",
      label: "순위",
      flex: 1,
      formatter: (value) => `${value}위`,
    },
    {
      name: "amount",
      label: "투자 금액",
      flex: 1,
      formatter: (value) => `${value}억 원`,
    },
    {
      name: "comment",
      label: "투자 코멘트",
      flex: 9,
    },
  ],
  rows: [
    {
      investorName: "유진영",
      ranking: 1,
      amount: 10,
      comment:
        "코드잇 FS 6기의 주강사는 정말 잘 가르칩니다! 여러분의 성장 가능성은 무궁무진합니다!",
    },
    {
      investorName: "유진영",
      ranking: 1,
      amount: 10,
      comment:
        "코드잇 FS 6기의 주강사는 정말 잘 가르칩니다! 여러분의 성장 가능성은 무궁무진합니다!",
    },
    {
      investorName: "유진영",
      ranking: 1,
      amount: 10,
      comment:
        "코드잇 FS 6기의 주강사는 정말 잘 가르칩니다! 여러분의 성장 가능성은 무궁무진합니다!",
    },
    {
      investorName: "유진영",
      ranking: 1,
      amount: 10,
      comment:
        "코드잇 FS 6기의 주강사는 정말 잘 가르칩니다! 여러분의 성장 가능성은 무궁무진합니다!",
    },
    {
      investorName: "유진영",
      ranking: 1,
      amount: 10,
      comment:
        "코드잇 FS 6기의 주강사는 정말 잘 가르칩니다! 여러분의 성장 가능성은 무궁무진합니다!",
    },
  ],
};
