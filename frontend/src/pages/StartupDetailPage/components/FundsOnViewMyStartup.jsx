import Button from "../../../components/Button";

function FundsOnViewMyStartup() {
  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-xl text-white">
          View My Startup에서 받은 투자
        </h2>

        <Button>기업 투자하기</Button>
      </div>

      <div className="py-4 border-t border-black-100">
        <strong className="font-bold text-xl text-white">총 200억 원</strong>
      </div>

      {/* <Table columns={startupDetail.column} rows={startupDetail.rows} /> */}
    </section>
  );
}

export default FundsOnViewMyStartup;
