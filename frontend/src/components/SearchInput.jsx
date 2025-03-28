import { useState } from "react";
import { useSearchParams } from "react-router";
import SearchIcon from "../assets/icon/ic_search.png";

function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValue = searchParams.get("query") || "";
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    searchParams.set("query", value);
    setSearchParams(searchParams);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="group px-3 bg-black-400 focus-within:bg-black-300 border border-gray-200 rounded-[10px] flex items-center h-12 w-[448px] transition"
    >
      <img
        src={SearchIcon}
        className="group-focus-within:hidden w-6 h-6 mr-1"
      />
      <input
        type="text"
        className="text-sm text-gray-100 outline-none placeholder:text-gray-100 w-full"
        placeholder="검색어를 입력해 주세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <img
        src={SearchIcon}
        className="group-focus-within:block w-6 h-6 mr-1 hidden"
      />
    </form>
  );
}

export default SearchInput;
