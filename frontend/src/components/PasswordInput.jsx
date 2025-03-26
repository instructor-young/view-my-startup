import { useId, useState } from "react";
import IconVisibilityOff from "../assets/icon/ic_visibility_off.png";
import IconVisibilityOn from "../assets/icon/ic_visibility_on.png";

function PasswordInput({ label, placeholder, value, onChange: handleChange }) {
  const id = useId();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="space-y-4 flex flex-col">
      <label htmlFor={id} className="font-bold text-white text-lg">
        {label}
      </label>
      <div className="flex items-center justify-between px-5 py-4 rounded-[10px] border border-gray-200 text-white focus-within:border-gray-100 transition">
        <input
          id={id}
          value={value}
          onChange={handleChange}
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          className="outline-none w-full placeholder:text-gray-200 text-sm"
        />

        <button
          onClick={() => setIsVisible((prev) => !prev)}
          className="cursor-pointer"
        >
          <img
            src={isVisible ? IconVisibilityOn : IconVisibilityOff}
            alt="visibility"
            className="size-6"
          />
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
