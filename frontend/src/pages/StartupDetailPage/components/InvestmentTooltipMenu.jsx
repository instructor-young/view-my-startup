import { useModal } from "../../../contexts/modal.context";
import CheckEditPrivilegeModal from "./CheckEditPrivilegeModal";
import DeleteInvestmentModal from "./DeleteInvestmentModal";

function InvestmentTooltipMenu({ investment, refetchStartup }) {
  const modal = useModal();

  const handleClickEdit = () =>
    modal.open((close) => (
      <CheckEditPrivilegeModal
        close={close}
        investment={investment}
        refetchStartup={refetchStartup}
      />
    ));

  const handleClickDelete = () =>
    modal.open((close) => (
      <DeleteInvestmentModal
        close={close}
        investmentId={investment.id}
        refetchStartup={refetchStartup}
      />
    ));

  return (
    <div className="flex flex-col absolute right-0 -bottom-2 translate-y-full w-36 border rounded-[10px] border-gray-200 bg-black-400 text-gray-100 text-sm z-10">
      <div
        onClick={handleClickEdit}
        className="cursor-pointer flex items-center justify-center h-10 border-b border-gray-200"
      >
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
