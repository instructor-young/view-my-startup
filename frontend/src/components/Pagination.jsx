import LeftArrowIcon from "../assets/icon/ic_arrow_left.png";
import RightArrowIcon from "../assets/icon/ic_arrow_right.png";
import PaginationButton from "./PaginationButton";

function Pagination({ currentPage, setCurrentPage, totalPagesLength }) {
  const goToPrevPage = () => {
    if (currentPage === 1) return;

    setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage === totalPagesLength) return;

    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="flex items-center gap-x-2 text-lg text-gray-200">
      <PaginationButton onClick={goToPrevPage}>
        <img src={LeftArrowIcon} />
      </PaginationButton>
      <div className="flex items-center gap-x-1">
        {Array(totalPagesLength)
          .fill(0)
          .map((_, index) => (
            <PaginationButton isActive={index + 1 === currentPage}>
              {index + 1}
            </PaginationButton>
          ))}
      </div>
      <PaginationButton onClick={goToNextPage}>
        <img src={RightArrowIcon} />
      </PaginationButton>
    </div>
  );
}

export default Pagination;
