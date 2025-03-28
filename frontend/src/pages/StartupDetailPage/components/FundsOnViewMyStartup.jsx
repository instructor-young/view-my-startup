import Button from "../../../components/Button";
import Table from "../../../components/Table";
import { useModal } from "../../../contexts/modal.context";
import InvestmentKebabButton from "./InvestmentKebabButton";
import NewInvestmentModal from "./NewInvestmentModal";

const columns = [
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
    flex: 11,
    renderCell: (row, column) => (
      <div className="flex items-center justify-between w-full">
        <p className="px-4">{row[column.name]}</p>
        <InvestmentKebabButton
          investment={row}
          refetchStartup={row.refetchStartup}
        />
      </div>
    ),
  },
];

function FundsOnViewMyStartup({ startup, refetchStartup }) {
  const modal = useModal();
  const investments = startup.virtualInvestments.map((investment, index) => ({
    ranking: index + 1,
    ...investment,
    refetchStartup,
  }));
  const totalAmount = investments.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  const handleClickInvest = async () => {
    await modal.open((close) => (
      <NewInvestmentModal
        startup={startup}
        close={close}
        onInvestSuccess={refetchStartup}
      />
    ));
  };

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-xl text-white">
          View My Startup에서 받은 투자
        </h2>

        <Button onClick={handleClickInvest}>기업 투자하기</Button>
      </div>

      {investments.length === 0 && (
        <p className="mt-[120px] text-gray-200 text-sm whitespace-pre-wrap text-center">{`아직 투자한 기업이 없어요.\n버튼을 눌러 기업에 투자해 보세요!`}</p>
      )}

      {investments.length > 0 && (
        <div>
          <div className="py-4 border-t border-black-100">
            <strong className="font-bold text-xl text-white">
              총 {totalAmount}억 원
            </strong>
          </div>

          <Table columns={columns} rows={investments} />
        </div>
      )}
    </section>
  );
}

export default FundsOnViewMyStartup;
