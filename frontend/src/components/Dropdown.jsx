import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
export default function Dropdown({
  options,
  onChange,
  borderColor = "#4e4e4e",
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const toggleDropdown = () => setOpen(!open);
  const selectOption = (option) => {
    onChange(option);
    setSelected(option);
    setOpen(false);
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className={`w-full border border-[${borderColor}] rounded-lg px-3 py-2 flex justify-between items-center bg-transparent text-right focus:outline-none text-white`}
      >
        {selected}
        <IoIosArrowDown
          className={`h-5 w-5 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Options */}
      {open && (
        <ul className="absolute mt-1 w-full bg-[#14151a] text-white font-bold border-gray-300 rounded-md shadow-lg z-50">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => selectOption(option)}
              className="px-3 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
