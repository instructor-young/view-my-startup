import LeftArrowIcon from "../assets/icon/ic_arrow_left.png";
import RightArrowIcon from "../assets/icon/ic_arrow_right.png";
import PaginationButton from "./PaginationButton";

function Pagination() {
  return (
    <div className="flex items-center gap-x-2 text-lg text-gray-200">
      <PaginationButton>
        <img src={LeftArrowIcon} />
      </PaginationButton>
      <div className="flex items-center gap-x-1">
        <PaginationButton isActive>1</PaginationButton>
        <PaginationButton>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
        <PaginationButton>4</PaginationButton>
        <PaginationButton>5</PaginationButton>
      </div>
      <PaginationButton>
        <img src={RightArrowIcon} />
      </PaginationButton>
    </div>
  );
}

export default Pagination;
