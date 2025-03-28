function InvestmentTooltipMenu() {
  return (
    <div className="flex flex-col absolute right-0 -bottom-2 translate-y-full w-36 border rounded-[10px] border-gray-200 bg-black-400 text-gray-100 text-sm z-10">
      <button className="h-10 border-b border-gray-200">수정하기</button>
      <button className="h-10">삭제하기</button>
    </div>
  );
}

export default InvestmentTooltipMenu;
