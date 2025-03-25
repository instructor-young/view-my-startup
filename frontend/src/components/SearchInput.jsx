import SearchIcon from "../assets/icon/ic_search.png";

function SearchInput() {
  return (
    <div className="p-3 bg-black-300 border border-gray-200 rounded-[10px] flex w-full max-w-[448px]">
      <img src={SearchIcon} className="w-6 h-6 mr-1" />
      <input
        type="text"
        className="text-sm text-gray-100 outline-none placeholder:text-gray-100"
        placeholder="검색어를 입력해 주세요"
      />
    </div>
  );
}

export default SearchInput;
