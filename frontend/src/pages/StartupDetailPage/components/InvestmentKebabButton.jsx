import { useState } from "react";
import KebabIcon from "../../../assets/icon/ic_kebab.png";
import InvestmentTooltipMenu from "./InvestmentTooltipMenu";

function InvestmentKebabButton({ investmentId, companyId, refetchStartup }) {
  const [isTooltipMenuVisible, setIsTooltipMenuVisible] = useState(false);

  return (
    <button
      className="mx-5 relative"
      onClick={() => setIsTooltipMenuVisible((prev) => !prev)}
    >
      <img src={KebabIcon} className="size-6" />
      {isTooltipMenuVisible && (
        <InvestmentTooltipMenu
          investmentId={investmentId}
          companyId={companyId}
          refetchStartup={refetchStartup}
        />
      )}
    </button>
  );
}

export default InvestmentKebabButton;
