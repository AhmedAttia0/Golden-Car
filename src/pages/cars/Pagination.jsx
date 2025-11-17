import { Button, IconButton, ButtonGroup } from "@material-tailwind/react";
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";

export default function Pagination({ totalPages, currentPage, dispatch }) {
  if (totalPages === 1) return null;

  const getPageNumbers = () => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = currentPage - 1;
    let end = currentPage + 1;

    if (currentPage <= 2) {
      start = 1;
      end = 3;
    } else if (currentPage >= totalPages - 1) {
      start = totalPages - 2;
      end = totalPages;
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPageNumbers();

  return (
    <ButtonGroup variant="outlined" className="overflow-x-auto flex-nowrap">
      <Button
        disabled={currentPage === 1}
        onClick={() => dispatch({ type: "PREV" })}
        className="flex items-center border-r rounded-none px-2 sm:px-4"
      >
        <RiArrowRightWideLine className="font-extrabold text-xl" />
        <span className="hidden sm:inline text-sm">السابق</span>
      </Button>

      {totalPages > 6 && currentPage > 3 && (
        <Button
          onClick={() => dispatch({ type: "SET_ACTIVE", payload: 1 })}
          className="rounded-none bg-gray-200 text-gray-900 px-2 sm:px-4"
        >
          1
        </Button>
      )}

      {totalPages > 6 && currentPage > 4 && (
        <Button
          className="rounded-none bg-gray-200 text-gray-900 px-2 sm:px-4"
          disabled
        >
          ...
        </Button>
      )}

      {pageNumbers.map((num) => (
        <Button
          key={num}
          className={`bg-gray-200 text-gray-900 border hover:bg-gray-400 px-2 sm:px-4 ${
            currentPage === num ? "border-black" : "border-teal-100"
          } rounded-none`}
          onClick={() => dispatch({ type: "SET_ACTIVE", payload: num })}
        >
          {num}
        </Button>
      ))}

      {totalPages > 6 && currentPage < totalPages - 2 && (
        <Button
          className="rounded-none bg-gray-200 text-gray-900 px-2 sm:px-4"
          disabled
        >
          ...
        </Button>
      )}

      {totalPages > 6 && currentPage < totalPages - 1 && (
        <Button
          className={`bg-gray-200 text-gray-900 border hover:bg-gray-400 px-2 sm:px-4 ${
            currentPage === totalPages ? "border-black" : "border-teal-100"
          } rounded-none`}
          onClick={() => dispatch({ type: "SET_ACTIVE", payload: totalPages })}
        >
          {totalPages}
        </Button>
      )}

      <Button
        disabled={currentPage === totalPages}
        onClick={() => dispatch({ type: "NEXT" })}
        className="flex items-center rounded-none px-2 sm:px-4"
      >
        <span className="hidden sm:inline text-sm">التالي</span>
        <RiArrowLeftWideLine className="font-extrabold text-xl" />
      </Button>
    </ButtonGroup>
  );
}
