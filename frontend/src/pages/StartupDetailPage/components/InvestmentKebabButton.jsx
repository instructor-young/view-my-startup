import { useState } from "react";
import KebabIcon from "../../../assets/icon/ic_kebab.png";
import InvestmentTooltipMenu from "./TooltipMenu";

function InvestmentKebabButton() {
  const [isTooltipMenuVisible, setIsTooltipMenuVisible] = useState(false);

  return (
    <button
      className="mx-5 relative"
      onClick={() => setIsTooltipMenuVisible((prev) => !prev)}
    >
      <img src={KebabIcon} className="size-6" />
      {isTooltipMenuVisible && <InvestmentTooltipMenu />}
    </button>
  );
}

export default InvestmentKebabButton;
