import { useState } from "react";
import DropdownToggleIcon from "../assets/icon/ic_dropdown_toggle.png";

function Dropdown({ width, options, selectedOption, setSelectedOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => () => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col shrink-0 relative" style={{ width }}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-black-400 hover:bg-black-300 transition border border-gray-200 rounded-[10px] px-4 h-12 flex items-center justify-between w-full gap-x-4 cursor-pointer"
      >
        <span className="shrink-0 text-gray-100 text-sm leading-none">
          {selectedOption.label}
        </span>
        <img
          data-is-open={isOpen}
          src={DropdownToggleIcon}
          alt="ic_dropdown_toggle"
          className="size-6 shrink-0 data-[is-open=true]:-rotate-180 transition"
        />
      </button>

      <div
        data-is-open={isOpen}
        className="bg-black-400 border border-gray-200 rounded-[10px] absolute -bottom-2 translate-y-full mt-2 w-full data-[is-open=true]:block hidden"
      >
        <ul className="grid grid-cols-1 text-sm text-gray-100">
          {options.map((option) => (
            <li
              key={option.value}
              className="border-gray-200 border-b last-of-type:border-none"
            >
              <button
                onClick={handleSelect(option)}
                className="h-10 mx-auto px-6 w-full cursor-pointer hover:bg-black-300 transition rounded-[10px]"
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
