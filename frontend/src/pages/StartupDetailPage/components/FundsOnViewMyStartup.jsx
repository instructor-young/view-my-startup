import Button from "../../../components/Button";
import { useModal } from "../../../contexts/modal.context";
import NewInvestmentModal from "./NewInvestmentModal";

function FundsOnViewMyStartup({ startup }) {
  const modal = useModal();

  const handleClickInvest = async () => {
    await modal.open((close) => (
      <NewInvestmentModal startup={startup} close={close} />
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

      <p className="mt-[120px] text-gray-200 text-sm whitespace-pre-wrap text-center">{`아직 투자한 기업이 없어요.\n버튼을 눌러 기업에 투자해 보세요!`}</p>

      {/* <div>
        <div className="py-4 border-t border-black-100">
          <strong className="font-bold text-xl text-white">총 200억 원</strong>
        </div>

        <Table columns={startupDetail.column} rows={startupDetail.rows} />
      </div> */}
    </section>
  );
}

export default FundsOnViewMyStartup;
