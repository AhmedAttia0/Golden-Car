import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const statusOptions = ["الكل", "محجوز", "غير محجوز"];
const carTypeOptions = ["suv", "sedan", "cabriolet", "pickup", "minivan"];

export default function TableHeader() {
  return (
    <div className="flex gap-4 flex-wrap  w-full overflow-visible">
      <button className="bg-[#5937e0] text-white px-4 py-2 rounded-lg hover:bg-[#6a4ae9] transition-all">
        + اضف سيارة جديدة
      </button>
      <div className="relative">
        <input
          type="text"
          placeholder="بحث"
          className="w-full border bg-transparent placeholder:text-[#4e4e4e] border-[#4e4e4e] rounded-lg py-2 pr-3 pl-10 text-right focus:outline-none text-white"
        />
        <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
      </div>
      <CarDropdown options={statusOptions} />
      <CarDropdown options={carTypeOptions} />
    </div>
  );
}

function CarDropdown({ options }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const toggleDropdown = () => setOpen(!open);
  const selectOption = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="w-48 relative">
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="w-full border border-[#4e4e4e] rounded-lg px-3 py-2 flex justify-between items-center bg-transparent text-right focus:outline-none text-white "
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
    </div>
  );
}
