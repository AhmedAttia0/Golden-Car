import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import FilterationOption from "./FilterationOption";
export default function FilterationCatogory({ filterCategory, onFilter }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div
        className="flex justify-between items-center mb-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography variant="small" className="font-medium text-gray-600 mb-2">
          {filterCategory.title}{" "}
        </Typography>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOpen && (
        <div className="space-y-1">
          {filterCategory.options.map((option, idx) => (
            <FilterationOption
              filterCategoryKey={filterCategory.key}
              onFilter={onFilter}
              key={idx}
              option={option}
            />
          ))}
        </div>
      )}
    </>
  );
}
