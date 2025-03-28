import { useId } from "react";

function TextInput({
  label,
  placeholder,
  multiline,
  rows,
  value,
  onChange: handleChange,
  ...props
}) {
  const id = useId();

  return (
    <div className="space-y-4 flex flex-col">
      <label htmlFor={id} className="font-bold text-lg text-white">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          className="resize-none px-5 py-4 rounded-[10px] border border-gray-200 placeholder:text-gray-200 outline-none focus-within:border-gray-100 text-sm transition text-white"
          {...props}
        />
      ) : (
        <input
          id={id}
          value={value}
          onChange={handleChange}
          type={"text"}
          placeholder={placeholder}
          className="px-5 py-4 rounded-[10px] border border-gray-200 placeholder:text-gray-200 outline-none focus-within:border-gray-100 transition text-sm text-white"
          {...props}
        />
      )}
    </div>
  );
}

export default TextInput;
