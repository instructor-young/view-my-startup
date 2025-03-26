import SearchIcon from "../assets/icon/ic_search.png";

function SearchInput() {
  return (
    <div className="px-3 bg-black-400 focus-within:bg-black-300 border border-gray-200 rounded-[10px] flex items-center h-12 w-[448px] transition">
      <img src={SearchIcon} className="w-6 h-6 mr-1" />
      <input
        type="text"
        className="text-sm text-gray-100 outline-none placeholder:text-gray-100 w-full"
        placeholder="검색어를 입력해 주세요"
      />
    </div>
  );
}

export default SearchInput;
