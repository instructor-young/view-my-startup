import { useEffect } from "react";
import { useSearchParams } from "react-router";
import LeftArrowIcon from "../assets/icon/ic_arrow_left.png";
import RightArrowIcon from "../assets/icon/ic_arrow_right.png";
import PaginationButton from "./PaginationButton";

function Pagination({
  currentPage,
  setCurrentPage,
  totalPagesLength,
  size = "md",
  shouldUseSearchParams = false,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const goToPrevPage = () => {
    if (currentPage === 1) return;

    setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage === totalPagesLength) return;

    setCurrentPage((prev) => prev + 1);
  };

  const goToPage = (page) => () => setCurrentPage(page);

  useEffect(() => {
    if (shouldUseSearchParams) {
      searchParams.set("page", currentPage);
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div
      data-size={size}
      className="flex items-center gap-x-2 text-lg text-gray-200"
    >
      <PaginationButton onClick={goToPrevPage} size={size}>
        <img src={LeftArrowIcon} />
      </PaginationButton>
      <div className="flex items-center gap-x-1">
        {Array(totalPagesLength)
          .fill(0)
          .map((_, index) => (
            <PaginationButton
              key={index + 1}
              isActive={index + 1 === currentPage}
              onClick={goToPage(index + 1)}
              size={size}
            >
              {index + 1}
            </PaginationButton>
          ))}
      </div>
      <PaginationButton onClick={goToNextPage} size={size}>
        <img src={RightArrowIcon} />
      </PaginationButton>
    </div>
  );
}

export default Pagination;
