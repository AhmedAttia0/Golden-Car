import { useState, useReducer } from "react";
import { Button, IconButton, ButtonGroup } from "@material-tailwind/react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE":
      return action.payload;
    case "NEXT":
      return state + 1;
    case "PREV":
      return state - 1;
    default:
      return state;
  }
};

export default function Pagination({ totalPages }) {
  if (totalPages === 1) return null;
  const [active, dispatch] = useReducer(reducer, 1);

  const getPageNumbers = () => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = active - 1;
    let end = active + 1;

    if (active <= 2) {
      start = 1;
      end = 3;
    } else if (active >= totalPages - 1) {
      start = totalPages - 2;
      end = totalPages;
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPageNumbers();

  return (
    <ButtonGroup variant="outlined" className="overflow-x-auto flex-nowrap">
      <Button
        disabled={active === 1}
        onClick={() => dispatch({ type: "PREV" })}
        className="flex items-center border-r rounded-none px-2 sm:px-4"
      >
        <RiArrowRightWideLine className="font-extrabold text-xl" />
        <span className="hidden sm:inline text-sm">السابق</span>
      </Button>

      {totalPages > 6 && active > 3 && (
        <Button
          onClick={() => dispatch({ type: "SET_ACTIVE", payload: 1 })}
          className="rounded-none bg-gray-200 text-gray-900 px-2 sm:px-4"
        >
          1
        </Button>
      )}

      {totalPages > 6 && active > 4 && (
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
            active === num ? "border-black" : "border-teal-100"
          } rounded-none`}
          onClick={() => dispatch({ type: "SET_ACTIVE", payload: num })}
        >
          {num}
        </Button>
      ))}

      {totalPages > 6 && active < totalPages - 2 && (
        <Button
          className="rounded-none bg-gray-200 text-gray-900 px-2 sm:px-4"
          disabled
        >
          ...
        </Button>
      )}

      {totalPages > 6 && active < totalPages - 1 && (
        <Button
          className={`bg-gray-200 text-gray-900 border hover:bg-gray-400 px-2 sm:px-4 ${
            active === totalPages ? "border-black" : "border-teal-100"
          } rounded-none`}
          onClick={() => dispatch({ type: "SET_ACTIVE", payload: totalPages })}
        >
          {totalPages}
        </Button>
      )}

      <Button
        disabled={active === totalPages}
        onClick={() => dispatch({ type: "NEXT" })}
        className="flex items-center rounded-none px-2 sm:px-4"
      >
        <span className="hidden sm:inline text-sm">التالي</span>
        <RiArrowLeftWideLine className="font-extrabold text-xl" />
      </Button>
    </ButtonGroup>
  );
}
