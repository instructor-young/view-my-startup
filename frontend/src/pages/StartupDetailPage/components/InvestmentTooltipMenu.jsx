import { useModal } from "../../../contexts/modal.context";
import DeleteInvestmentModal from "./DeleteInvestmentModal";

function InvestmentTooltipMenu({ investmentId, companyId, refetchStartup }) {
  const modal = useModal();

  const handleClickDelete = () =>
    modal.open((close) => (
      <DeleteInvestmentModal
        close={close}
        investmentId={investmentId}
        refetchStartup={refetchStartup}
      />
    ));

  return (
    <div className="flex flex-col absolute right-0 -bottom-2 translate-y-full w-36 border rounded-[10px] border-gray-200 bg-black-400 text-gray-100 text-sm z-10">
      <div className="cursor-pointer flex items-center justify-center h-10 border-b border-gray-200">
        수정하기
      </div>
      <div
        onClick={handleClickDelete}
        className="cursor-pointer h-10 flex items-center justify-center"
      >
        삭제하기
      </div>
    </div>
  );
}

export default InvestmentTooltipMenu;
